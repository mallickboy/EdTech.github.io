const nodemailer = require('nodemailer'); // adding mail service
const { getNote,getNotes, createNote,testing,login } = require('../databaseMaintain/profileSQL.js');

const transporter = nodemailer.createTransport({ // host authentication
    service: 'gmail',
    port: 465,
  secure: true,
    auth: {
        user: process.env.MAIL_HOST,
        pass: process.env.MAIL_PASSWORD
    }
});
let usersVerification=[];

async function emailVerification(app,user,res) {
    console.log("email Verification");
    console.log(user.newUserEmail);
    const htmlContent = `
    <!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <style>
        body {
            background-color: antiquewhite
        }
    </style>
</head>

<body>
    <h2></h2>
    <div class="loginContainer">
        <div class="loginHeading">
            <h1>Almost Done</h1><span class="hoverPopout" id="closeForm" onclick="displayLogin()">X</span>
        </div>
        <form id="verificationForm" class="myForm" onsubmit="handleVerification(event)">
            <input class="myInput" type="email" name="verifyEmail" value="${user.newUserEmail}" placeholder="${user.newUserEmail}" readonly>
            <input class="myInput" type="number" name="clientOtp" placeholder="Enter your 6 digit ReLearn OTP here">
            <button class="btn hoverPopout" name="entry" value="3">Verify </button>
        </form>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Indie+Flower&family=Shadows+Into+Light&display=swap');

        .loginContainer {
            top: 20vh;
            display: flex;
            position: sticky;
            align-items: center;
            justify-self: center;
            flex-direction: column;
            min-height: 50vh;
            width: 45vw;
            margin: auto;
            margin-top: 30px;
            border: 2px solid black;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            background-color: rgb(255 255 255 / 78%);
            outline: none;
        }

        .hoverPopout:hover {
            cursor: pointer;
            transform: scale(1.15);
            border-radius: 20px;
            /* box-shadow: 0 0 5px #42fbf2,
0 0 10px #42fbf2,
0 0 50px #42fbf2; */
            transition: 300ms ease-in-out;
        }

        .loginHeading {
            display: flex;
            position: relative;
            justify-content: center;
            align-items: center;
            font-family: 'Indie Flower', cursive;
            width: 45vw;
        }

        #closeForm {
            display: flex;
            font-size: 39px;
            position: absolute;
            padding-right: 1vw;
            top: 0;
            right: 0;
            font-weight: bold;
            cursor: pointer;
            /* background-color: antiquewhite; */
        }

        #closeForm:hover {
            color: rgb(202, 30, 32);
        }

        .loginHeading h1 {
            font-size: 39px;
            align-items: center;
            justify-content: center;
            padding: 1vh 0;
            margin-top: 2vh;
            /* background-color: aquamarine; */
        }

        .myForm {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .myInput {
            width: 60%;
            padding: 10px;
            margin: 10px;
            font-size: 16px;
            border: 2px solid rgb(92, 0, 0);
            border-radius: 12px;
            outline: none;
        }

        .btn {
            font-size: 20px;
            padding: 6px 12px;
            border: 2px solid black;
            border-radius: 20px;
            background-color: rgb(178 0 2);
            color: white;
            margin: 20px 0px;
            font-weight: bold;
            cursor: pointer;
        }
        </style>
        <script defer="">
            function handleVerification(event) {
                event.preventDefault(); // Prevent the default form submission

                // Get form elements
                const emailInput = document.querySelector('input[name="verifyEmail"]');
                const otpInput = document.querySelector('input[name="clientOtp"]');

                // Prepare data to send to the server
                const formData = {
                    verifyEmail: emailInput.value,
                    clientOtp: otpInput.value,
                    entry: 3
                };
                console.log(formData)
                // Perform an AJAX request to the server
                fetch('/auth', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formData)
                    })
                    .then(response => response.json())
                    .then(data => {
                        // Save data to local storage on successful authentication
                        if (data) {
                            localStorage.setItem('userData', JSON.stringify(data));
                            console.log("got data")
                            console.log(data)
                            // Redirect or perform other actions as needed
                            window.location.href = 'http://localhost:5173/'
                        } else {
                            // Handle authentication failure
                            alert('Authentication failed: ' + data.message);
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            }

           
        </script>
    </div>
</body>

</html>

  `;
    // Case 1 : New User Sing up // entry = 2
    if (user.entry == 2) {
        // Generating 6 digit OTP
        const otp = Math.floor(Math.random() * (999999 - 100000)) + 100000;
        //Sending email
        var mailOptions = {
            from: process.env.MAIL_HOST,
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
            name: user.newUserName,
            age: user.newUserAge,
            email: user.newUserEmail,
            password: user.newUserPassword,
            time: new Date(),
            otp: otp,
        });
        console.table(usersVerification);

        // res.send("New user \n Email : " + user.newUserEmail+"\n Name : "+user.newUserName+"\n Age : "+user.newUserAge);
        // set the template engine as pug
        // app.set("view engine", 'pug');
        // const home = fs.readFileSync('./landingPageMaintain/landingPage/index.html');

        res.status(200).send(htmlContent);
        // set the views directory
        // app.set('views', path.join(__dirname, 'templates'))
        // res.status(200).render('otpVerify', { email: user.newUserEmail })
    } else if (user.entry == 1) {// Case 2 : Existing User Sing in // value of entry = 1

        // searching in the database
        // Contact.find({ "email": user.clientEmail, "password": user.clientPassword }).then((result) => {
        //     if (result == '') { // Not matched
        //         console.log('Not found')
        //     } else { // matched

        //         authenticationSucessful(res,1); // loadig dashboard based on the
        //     }
        // }).catch(err => {
        //     console.log(err)
        // })
        // console.log(user.clientEmail,user.clientPassword)
       userData= await clientLogin(user.clientEmail,user.clientPassword)
        authenticationSucessful(res,userData);

    } else if (user.entry == 3) {// Otp verification case 3 entry=3
        // console.table(user);

        var otpVerificationFound = compareOtp(user.verifyEmail, user.clientOtp);
        // console.log("comparing : ",user.verifyEmail,user.clientOtp)
        // console.log("\t Verrr = " + otpVerificationFound);
        if (otpVerificationFound != null) { // save in database
            try {
                let x=usersVerification[otpVerificationFound]
                let user_name=x.name, user_age=x.age, user_email=x.email, user_password=x.password, user_profile="default.jpg", user_other_data="none";
                console.log(x.email);
                console.log(user_name, user_age, user_email, user_password, user_profile, user_other_data);
                await  createNote(user_name, user_age, user_email, user_password, user_profile, user_other_data);
                let userData = {
                    name: user_name,
                    age: user_age,
                    email: user_email,
                  
                    profile: user_profile,
                    otherData: user_other_data,
                };
                console.log(userData)
                authenticationSucessful(res,userData);
            } catch (error) {
                console.log(error);
                res.status(400).send("Item is not saved in the database");
            }           
        } else {
            res.status(404).send(htmlContent);
        }
    }
}
async function clientLogin(email,password) {
    try {
        const userLogedIn =await login(email,password);
        if (userLogedIn) {
            console.log("User found");
            console.log(userLogedIn);
            return userLogedIn
        } else {
            console.log("User not found");   
                     
        }
    } catch (error) {
        console.log("Login error");
    }
}
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
let item = 0;
setInterval(() => {
    delete usersVerification[item];
    item++;
}, interval);

function sendOTP(formBody) {
    const otp = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    //Sending email
    var mailToClient = {
        from: process.env.MAIL_HOST,
        to: `${formBody.newUserEmail}`,
        subject: `Congratulations ReLerner `,
        text: `Dear ${formBody.newUserName} , your one time password (OTP) for ReLearn sing up is :  ${otp} 
        
        \n\n\n\n\n\tnoreply@ReLearn.com`
    };
    // sending OTP through email :

    transporter.sendMail(mailToClient, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            // storing data in temp dictionery
            usersVerification.push({
                email: formBody.newUserEmail,
                password: formBody.newUserPassword,
                name: formBody.newUserName,
                age: formBody.newUserAge,
                time: new Date(),
                otp: otp,
            });
            console.table(usersVerification);
        }
    });
}

function authenticationSucessful(res,result){
    if(result)
    {
       
        console.log( result)
        res.send(result)
    }
    else {
        let htmlContent=`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Your 404 Page</title>
        </head>
        <body>
          <h1>Welcome to Your Custom Page!</h1>
          <p>This is a custom HTML response.</p>
        </body>
        </html>
      `;
    
      
        res.status(404).send(htmlContent);   
    }
     
}

module.exports = { emailVerification }