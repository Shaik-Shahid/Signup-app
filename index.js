
//es6 style
const express = require('express');
const app = express();

//connect to frontend
app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/"+"signup.html");
})

 //server logic
 app.listen(4000,()=>{
    console.log("server is running on port 4000!!!");
 });
 //dynamic logic
 app.get("/process",(req,res) =>{
    //request data gathering logic
    const uname = req.query.username;
    const pwd = req.query.password;
    const gender = req.query.gender;
    const address = req.query.address;
    const Qualification = req.query.Qualification;
 
 //business logic
 if(true)
 {
    res.end("thank you "+uname+"for registering with us"
    +"your name is:"+uname
    +"your gender is:"+gender
    +"your address is:"+address
    +"your Qualification is:"+Qualification);
    
 }
else
   {
   res.end("please check  your details once");
 }
})