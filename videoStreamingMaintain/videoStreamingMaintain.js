const fs=require('fs')
const videoFileMap={
    'v1':'./userFiles/courses/2023/math/videos/v1.mp4',
    'v2':'./userFiles/courses/2023/math/videos/v2.mp4'
}
function videoStreamingMaintain(express,app) {
    app.get('/video/:fileName',(req,res)=>{
        console.log("got req ")
        // res.status(200).send("Saved in db");
        const fileName=req.params.fileName;
        const filePath=videoFileMap[fileName];
        if(!filePath){
            return res.status(404).send("File not found")
        }
        const stat=fs.statSync(filePath);
        const fileSize=stat.size;
        const range=req.headers.range;
        if (range) {
            console.log("in range ")
            const parts=range.replace(/bytes=/,'').split('-');
            const start=parseInt(parts[0],10);
            const end=parts[1]? parseInt(parts[1],10):fileSize-1;

            const chunkSize=end-start+1;
            const file=fs.createReadStream(filePath,{start,end});
            const head={
                'Content-Range':`bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges':'bytes',
                'Content-Length':chunkSize,
                'Content-Type':'video/mp4'
            }
            res.writeHead(206,head);
            file.pipe(res);
        }
        else{
            console.log("not in range ")
            const head={
                'Content-Length':fileSize,
                'Content-Type':'video/mkv'
            }
            res.writeHead(200,head);
            fs.createReadStream(filePath).pipe(res)
        }
    })
}
module.exports={videoStreamingMaintain};