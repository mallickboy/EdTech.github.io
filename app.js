const { getNote,getNotes, createNote,testing } = require('./databaseMaintain/profileSQL.js');
const { SQLEditViaLocalhost } = require('./databaseMaintain/SQLEditViaLocalhost.js');
const { showLandingPage } = require('./landingPageMaintain/landingPageMaintain.js');
const {profileRoute} =require("./DashboardPageMaintain/profile")
const cors = require('cors');
const express =require('express');
const { courseRoute } = require('./DashboardPageMaintain/course.js');
const app= express();
const port=8080;
const hostIP='127.0.0.1';
app.use(cors());
SQLEditViaLocalhost(express,app);

showLandingPage(express,app);
profileRoute(express,app);
courseRoute(express,app)
// server error and listen
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

app.listen(port, () => {
    console.log(`Live on port http://${hostIP}:${port}`)
    // console.log(`Jump to demo http://${hostIP}:${port}/demo`  )
}) 