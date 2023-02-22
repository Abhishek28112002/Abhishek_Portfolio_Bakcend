const express= require('express');
const router=express.Router();
const User =require('./model/User');
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "200030003@iitdh.ac.in", pass: "qeigjxgpabotvajh" },
});
//fasd
router.post('/',async(req,res)=>{
    const user=new User(req.body);
    const otp = Math.floor(Math.random() * 100000);
   
    let mailOptions = {
      from: "200030003@iitdh.ac.in", 
      to: req.body.email,
      subject: "Thanks For Your Message!", 
      html:`<b> Thanks ${req.body.username} ! I will reply to your message Shortly</b>` 
    };
   
   let response = await new Promise((rsv, rjt) => {
transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return rjt(error)
        } 
        rsv('Email sent'); 
        console.log("Email send");
    });
});
 mailOptions = {
    from: "200030003@iitdh.ac.in", 
    to: "200030003@iitdh.ac.in",
    subject: `${req.body.subject}`, 
    html:`${req.body.message}`,  
  };
 
  response = await new Promise((rsv, rjt) => {
transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          return rjt(error)
      } 
      rsv('Email sent'); 
      res.send("Email send");
  });
});
})
module.exports=router;