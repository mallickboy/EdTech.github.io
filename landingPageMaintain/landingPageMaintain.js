const path = require('path');
const fs = require('fs');
const bodyParser = require("body-parser")
const {emailVerification}=require("./emailVerification.js")

function showLandingPage(express, app) {

    //serving static file
    app.use('/servingItems', express.static('landingPageMaintain/servingItems'));

    // set the template engine as pug
    app.set("view engine", 'html');

    // set the views directory
    app.set('views', path.join(__dirname, 'landingPageMaintain/landingPage'))

    // Setting home page
    const home = fs.readFileSync('./landingPageMaintain/landingPage/index.html');
    // respect to root folder as exporting the function 

    app.get('/', (req, res) => {
        res.status(200).end(home);
    })
    app.get('/courses', (req, res) => {
        res.status(200).end(fs.readFileSync('./landingPageMaintain/landingPage/login.html'))
        // res.status(200).end(fs.readFileSync('./templates/otpVerify.pug') )
    })
    const bodyParser = require("body-parser") // to get html form data
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.post("/courses",async (req, res)=> {
        const formBody = await req.body;
        emailVerification(app,formBody,res);
        // console.log(formBody.newUserEmail);
        // res.status(200).send("Saved in db")
    });
}

module.exports = { showLandingPage };