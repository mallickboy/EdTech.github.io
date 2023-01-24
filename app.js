const express=require('express');  // importing express
const app=express(); // initializing espress in the app
const path=require('path');
const fs=require('fs');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended:true
}));
const port=8001;
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
app.use('/servingItems',express.static('servingItems'));


// Setting home page
const home=fs.readFileSync('./templates/index.html');

// set the template engine as pug
app.set("view engine",'hbs');

// set the views directory
app.set('views',path.join(__dirname,'templates'))   


app.get('/',(req,res)=>{
    res.status(200).end(home) ;
})
// Serving page on get request
app.get('/courses', (req, res) => {
    res.status(200).end(fs.readFileSync('./templates/login.html') )
    // res.status(200).end(fs.readFileSync('./templates/otpVerify.pug') )
  })  

// Creating temporary sing up varification dictionary 
let usersVerification=[]// initially empty   

// Collecting data at post request
app.post("/courses", function(req, res) {
    const user=req.body;
    console.log("user",user);
    // console.log(user.clientEmail )
      
    // res.send("Addition - " + user);

    // Case 1 : New User Sing up // entry = 2
    if (user.entry==2) {
        // Generating 6 digit OTP
        const otp=Math.floor(Math.random()*(999999 - 100000))+100000; 
        //Sending email
        var mailOptions = {
            from: 'corona.kobe.jabe@gmail.com',
            to: `${user.newUserEmail}`,
            subject: `Congratulations ReLerner `,
            text: `Dear ${user.newUserName} , your one time password (OTP) for ReLearn sing up is :  ${otp} 
            
            \n\n\n\n\n\tnoreply@ReLearn.com`
        };
        // sending OTP through email :

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        // storing data in temp dictionery
        usersVerification.push({
            otp: otp,
            email:user.newUserEmail,
            name:user.newUserName,
            age: user.newUserAge,
            time:new Date().getTime(),
        });
        console.table(usersVerification);
        
        // res.send("New user \n Email : " + user.newUserEmail+"\n Name : "+user.newUserName+"\n Age : "+user.newUserAge);
        
        res.status(200).render('otpVerify',{email:user.newUserEmail})
    }else if(user.entry==1){// Case 2 : Existing User Sing in // value of entry = 1
        res.send("Existing user \n Email : "+user.clientEmail+"\n Password : "+user.clientPassword);

    }else if(user.entry==3){// Otp verification case 3 entry=3
        // console.table(user);
        
        var otpVerificationFound=compareOtp(user.verifyEmail,user.clientOtp);
        // console.log("comparing : ",user.verifyEmail,user.clientOtp)
        // console.log("\t Verrr = "+otpVerificationFound);
        if ( otpVerificationFound) {
            // console.log("Hurrreeeee");
            // app.set('views',path.join(__dirname,'servingItems/Dashboard/template'))   

            res.status(200).render('dashboard2') ;   
        } else {
            res.status(404).render('otpVerify',{email:user.verifyEmail, round:`Retry`})
        }
        // deleteFirstOTP();
    } 
    // console.table('otp ='+usersVerification[0].otp);
});
function compareOtp(verifyEmail,clientOtp) {
    let matched=0;
    let i=0;
    usersVerification.forEach(element => {
        console.log(element.otp+'='+clientOtp +'\t'+element.email+"="+verifyEmail)
        if (element.otp==clientOtp && element.email==verifyEmail) {

            // Add this user to the database
            console.log("Email verified for :"); // Database work 
            console.table(element); // Database work

            console.log("Moved to database so deleting from the temporary file")
            // usersVerification.Remove(element)
            //  usersVerification.delete(i); // deleting the
            
             console.table(usersVerification);
            matched=1;
            return matched;
        }
        i++;
    });
    return matched ;
}

// const interval=10000 ; // 10 minutes

// function deleteFirstOTP() {
//         // console.log(usersVerification);
//         if ((usersVerification[0].time) && (new Date().getTime()-usersVerification[0].time >interval)) {
//             console.log("Deleting : \n")
//             console.table(usersVerification[0]);
//             delete usersVerification[0];
//         }
// }

// console.log(new Date().getTime()  )

    


// Server listening at channel :    
app.listen(port,()=>{
    console.log(`Live on port http://127.0.0.1:${port}` )
    // console.log(`Jump to demo http://127.0.0.1:${port}/demo`  )
})
console.log(" Modify otpVerificationFound section Problem in var & const & problem in the comparison");