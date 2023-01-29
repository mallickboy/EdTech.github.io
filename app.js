const express = require('express');  // importing express
const app = express(); // initializing espress in the app
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended: true
}));
// Connecting to mongodb server
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://localhost:27017/edTech');
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("\t\t\t\t\t\tWe are connected with Database")
});
// Define mongoose schema
const contactSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    age: String,
    time: String
});
const Contact = mongoose.model('edTechprofile', contactSchema);
const port = 3000;

const nodemailer = require('nodemailer'); // adding mail service
const { exit } = require('process');

const transporter = nodemailer.createTransport({ // host authentication
    service: 'gmail',
    auth: {
        user: 'corona.kobe.jabe@gmail.com',
        pass: 'urosqsimfwbflnxg'
    }
});


//serving static file
app.use('/servingItems', express.static('servingItems'));


// Setting home page
const home = fs.readFileSync('./templates/index.html');

// set the template engine as pug
app.set("view engine", 'hbs');

// set the views directory
app.set('views', path.join(__dirname, 'templates'))


app.get('/', (req, res) => {
    res.status(200).end(home);
})

//Video Streaming
app.get('/video', function(req, res){
    const range = req.headers.range;
    if(!range){
        res.status(400).send("Requires Range header");
    }
    const videoPath = "./servingItems/static/Video/earth.mp4";
    const videoSize = fs.statSync(videoPath).size;
   
    const CHUNK_SIZE = 10**6; //1 MB
    const start = Number(range.replace(/\D/g, "")); 
    const end = Math.min(start + CHUNK_SIZE , videoSize-1);
    const contentLength = end-start+1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": 'bytes',
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }
    res.writeHead(206,headers);
    const videoStream = fs.createReadStream(videoPath,{start, end});
    videoStream.pipe(res);

})

// Serving page on get request
app.get('/courses', (req, res) => {
    res.status(200).end(fs.readFileSync('./templates/login.html'))
    // res.status(200).end(fs.readFileSync('./templates/otpVerify.pug') )
})
// app.get('/d', (req, res) => {
//     app.set("view engine", 'hbs');
//     app.set('views', path.join(__dirname, 'templates'))
//     res.status(200).render('dashboard', { username: "Tamal" });
//     // res.status(200).end(fs.readFileSync('./templates/otpVerify.pug') )
// })

// Creating temporary sing up varification dictionary 
let usersVerification = []// initially empty   

// Collecting data at post request
app.post("/courses", function (req, res) {
    const user = req.body;

    // console.log(user.clientEmail )

    // res.send("Addition - " + user);

    // Case 1 : New User Sing up // entry = 2
    if (user.entry == 2) {
        // Generating 6 digit OTP
        const otp = Math.floor(Math.random() * (999999 - 100000)) + 100000;
        //Sending email
        var mailOptions = {
            from: 'corona.kobe.jabe@gmail.com',
            to: `${user.newUserEmail}`,
            subject: `Congratulations ReLerner `,
            text: `Dear ${user.newUserName} , your one time password (OTP) for ReLearn sing up is :  ${otp} 
            
            \n\n\n\n\n\tnoreply@ReLearn.com`
        };
        // sending OTP through email :

        // transporter.sendMail(mailOptions, function(error, info){
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // });

        // storing data in temp dictionery
        usersVerification.push({
            email: user.newUserEmail,
            password: user.newUserPassword,
            name: user.newUserName,
            age: user.newUserAge,
            time: new Date(),
            otp: otp,
        });
        console.table(usersVerification);

        // res.send("New user \n Email : " + user.newUserEmail+"\n Name : "+user.newUserName+"\n Age : "+user.newUserAge);
        // set the template engine as pug
    
        res.status(200).render('otpVerify', { email: user.newUserEmail })
    } else if (user.entry == 1) {// Case 2 : Existing User Sing in // value of entry = 1

        // searching in the database
        Contact.find({ "email": user.clientEmail, "password": user.clientPassword }).then((result) => {
            if (result == '') { // Not matched
                console.log('Not found')
            } else { // matched
                loadDashboard(res,result[0]); // loadig dashboard based on the
            }
        }).catch(err => {
            console.log(err)
        })
    } else if (user.entry == 3) {// Otp verification case 3 entry=3
        // console.table(user);

        var otpVerificationFound = compareOtp(user.verifyEmail, user.clientOtp);
        // console.log("comparing : ",user.verifyEmail,user.clientOtp)
        // console.log("\t Verrr = " + otpVerificationFound);
        if (otpVerificationFound != null) {
            var myData = new Contact(usersVerification[otpVerificationFound]);
            myData.save().then(() => {

                loadDashboard(res,myData);
            }).catch(() => {
                res.status(400).send("Item is not saved in the database")
            });
        } else {
            res.status(404).render('otpVerify', { email: user.verifyEmail, round: `Retry` })
        }
    }
    // console.table('otp ='+usersVerification[0].otp);
    function loadDashboard(res,result){
        app.set("view engine", 'hbs');
                    app.set('views', path.join(__dirname, 'templates'))
                    res.status(200).render('dashboard', { username: result.name, userage: result.age, useremail: result.email });
    }
});

function compareOtp(verifyEmail, clientOtp) {
    let matched = null;
    let i = 0;
    usersVerification.forEach(element => {
        console.log(element.otp + '=' + clientOtp + '\t' + element.email + "=" + verifyEmail)
        if (element.otp == clientOtp && element.email == verifyEmail) {

            // Add this user to the database
            console.log("Email verified for :"); // Database work 
            console.table(element); // Database work

            console.log("Moved to database so deleting from the temporary file")
            // usersVerification.Remove(element)
            //  usersVerification.delete(i); // deleting the

            console.table(usersVerification);
            matched = i;
        }
        i++;
    });
    return matched;
}

const interval = 60 * 10000; // 60 minutes

// function deleteFirstOTP() {
//         // console.log(usersVerification);
//         if ((usersVerification[0].time) && (new Date().getTime()-usersVerification[0].time >interval)) {
//             console.log("Deleting : \n")
//             console.table(usersVerification[0]);
//             delete usersVerification[0];
//         }
// }
let item = 0;
setInterval(() => {
    delete usersVerification[item];
    item++;
}, interval);

// console.log(new Date().getTime()  )




// Server listening at channel :    
app.listen(port, () => {
    console.log(`Live on port http://127.0.0.1:${port}`)
    // console.log(`Jump to demo http://127.0.0.1:${port}/demo`  )
})
// console.log(" Modify otpVerificationFound section Problem in var & const & problem in the comparison");