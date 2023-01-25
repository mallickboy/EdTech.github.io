const express = require('express');  // importing express
const app = express(); // initializing espress in the app
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended: true
}));
// Connecting to mongodb server
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://128.199.88.139:27017/edTech');
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("\t\t\t\t\t\tWe are connected with Database")
});
// Define mongoose schema
const contactSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    age: String,
    time: String
});
const Contact = mongoose.model('edTechprofile', contactSchema);
Contact.find({"name":"tamal"}).then((result)=>{
    if (result=='') {
        console.log('Not found')
    } else {
        // result=JSON.parse((result));
        console.log(result[0].name);        
    }
}).catch(err=>{
    console.log(err)
})