const express=require("express")
const path=require("path")

app=express()

app.use("/static",express.static(path.join(__dirname,'staticfolder')))
app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))
app.get("/",(req,res)=>
{
    res.render('dashboard',{
        Name:'Sushanta Das',
        Email:'susanta@gmail.com',
        Age:'20',
        Address:'1600 Amphitheatre Parkway Mountain View, CA 94043',
        Gender:'male',
        Birthday:'03/11/2002',
        Phone:'7047352759'
    })

}
)
app.listen(8080,()=>{console.log("hhshs")})