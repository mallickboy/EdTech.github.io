const {v4:dynamicURL}=require('uuid')
const path = require('path');

function videoChatMaintain(socketIO,express,app) {
    console.log("videoChatMaintain");
    app.set('view engine','ejs');
    // app.use(express.static('public'));
    app.set('views', path.join(__dirname, './videoCallingRoom'))
    app.get('/videoCalling',(req,res)=>{
        // res.status(200).send("Connected to live video chat");
        res.status(200).redirect(`/videoCalling/${dynamicURL()}`);
    })
    app.get('/videoCalling/:room',(req,res)=>{
        // res.status(200).send("Connected to live video chat");
        res.status(206).render('videoCallingRoom',{roomId:req.params.room})
    })
    socketIO.on('connection',(socket)=>{
        socket.on('join-room',(roomId,userId)=>{
            console.log("videoCallingRoom : ","connetced ",roomId,userId);
            socket.join(roomId);
            socket.to(roomId).emit('user-connected', userId);
            socket.on('disconnect',()=>{
                socket.to(roomId).emit('user-disconnected', userId);
                console.log("videoCallingRoom : ","disconnected ",userId);
            })
        })
    })

}
module.exports={videoChatMaintain}