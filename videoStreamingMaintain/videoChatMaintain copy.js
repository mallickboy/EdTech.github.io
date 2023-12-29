const io= require('socket.io');
const {v4:dynamicURL}=require('uuid')
const path = require('path');

function videoChatMaintain(socketIO,express,app) {
    // console.log("videoChatMaintain");
    app.set('view engine','ejs');
    // app.use(express.static('public'));
    app.set('views', path.join(__dirname, './videoCallingRoom'))
    app.get('/',(req,res)=>{
        // res.status(200).send("Connected to live video chat");
        res.status(200).redirect(`/${dynamicURL()}`);
    })
    app.get('/:room',(req,res)=>{
        // res.status(200).send("Connected to live video chat");
        res.status(200).render('videoCallingRoom',{roomId:req.params.room})
    }) 
    socketIO.on('connection',(socket)=>{
        console.log("videoCallingRoom : ");
        socket.on('join-room',(roomId,userId)=>{
            console.log("videoCallingRoom : ",roomId,userId);
        })
    })
}
module.exports={videoChatMaintain}