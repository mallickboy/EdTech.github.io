const express=require('express');  // importing express
const app=express(); // initializing espress in the app
const path=require('path');
const port=7000;

//serving static file
app.use('/static',express.static('staticFolder'));

// set the template engine as pug
app.set("view engine",'pug');

// set the views directory
app.set('views',path.join(__dirname,'template'))   

// our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('index',{title:'MY title',message:"Hi Sushanta, ki koris ??"})
  })  

app.get('/',(req,res)=>{
    res.status(200).render("dashboard");
})


app.listen(port,()=>{
    console.log(`Live on port http://127.0.0.1:${port}` )
    console.log(`Jump to demo http://127.0.0.1:${port}/demo` )
})