const { getNote,getNotes, createNote,testing } = require('./databaseMaintain/profileSQL.js');
const { SQLEditViaLocalhost } = require('./databaseMaintain/SQLEditViaLocalhost.js');
const { showLandingPage } = require('./landingPageMaintain/landingPageMaintain.js');
const {videoStreamingMaintain}=require('./videoStreamingMaintain/videoStreamingMaintain.js')
const {videoChatMaintain}=require('./videoStreamingMaintain/videoChatMaintain.js')
const express =require('express')
const app= express();
const dotenv = require('dotenv');
dotenv.config()
const port=process.env.BACKEND_PORT;
const hostIP=process.env.BACKEND_HOST;
const server=app.listen(port, () => {
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

