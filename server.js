const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const app=express();
const port=process.env.PORT || 5000;
const SendMessage =require('./sendmessage');
app.use(bodyParser.json());


    const DB_URL = "mongodb+srv://abhishek:abhi2811@cluster0.q9w6ssn.mongodb.net/test";

    mongoose.connect(DB_URL,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{console.log('cONNECTED TO DATABASE')}).catch(err => console.log(err));
app.use("/sendmail",SendMessage);
app.get('/',async(req,res)=>{
    res.send("Hi");
})
app.listen(port,console.log(`This server is running at ${port}`));