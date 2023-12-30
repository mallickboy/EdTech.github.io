const { getNote,getNotes, createNote,testing } = require('./databaseMaintain/profileSQL.js');
const { SQLEditViaLocalhost } = require('./databaseMaintain/SQLEditViaLocalhost.js');
const { showLandingPage } = require('./landingPageMaintain/landingPageMaintain.js');
const {profileRoute} =require("./DashboardPageMaintain/profile")
const {videoStreamingMaintain}=require('./videoStreamingMaintain/videoStreamingMaintain.js')
const {videoChatMaintain}=require('./videoStreamingMaintain/videoChatMaintain.js')
const cors = require('cors');
const express =require('express');
const dotenv = require('dotenv');
const { courseRoute } = require('./DashboardPageMaintain/course.js');
const app= express();
dotenv.config()
app.use(cors());
SQLEditViaLocalhost(express,app);

showLandingPage(express,app);
profileRoute(express,app);
courseRoute(express,app)





const port=process.env.BACKEND_PORT;
const hostIP=process.env.BACKEND_HOST;
const server=app.listen(8080, () => {
  console.log(`App : Live on port http://${hostIP}:${port}`)
}) 
const { Server } = require("socket.io");
const io = new Server(server  , {
  cors: {
    origin: '*',
  }
});
SQLEditViaLocalhost(express,app);

showLandingPage(express,app);

videoStreamingMaintain(express,app);
videoChatMaintain(io,express,app);

// server error and listen
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

