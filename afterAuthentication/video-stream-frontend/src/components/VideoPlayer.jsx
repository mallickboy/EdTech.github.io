import React,{useRef,useEffect} from "react";
export const VideoPlayer=({videoId})=>{
    const port=process.env.BACKEND_PORT;
    const hostIP=process.env.BACKEND_HOST;
    const videoRef=useRef(null)
    useEffect(()=>{
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.removeAttribute('src')
            videoRef.current.load()
        }
    })
    console.log("address = ",hostIP,port)
    return(
        
        <video ref={videoRef} width='320' height='240' controls autoPlay>
            <source src={`http://127.0.0.1:8080/video/${videoId}`} type="video/mp4"></source>
            YOUR browser doesn't support video tag
        </video>
    )
}