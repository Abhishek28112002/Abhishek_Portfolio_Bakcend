const express= require('express');
const router=express.Router();
const User =require('./model/User');
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "200030003@iitdh.ac.in", pass: "qeigjxgpabotvajh" },
});

router.post('/',async(req,res)=>{
    const user=new User(req.body);
    const otp = Math.floor(Math.random() * 100000);
   
    const mailOptions = {
      from: "200030003@iitdh.ac.in", 
      to: req.body.email,
      subject: "Thanks For Your Message!", 
      html:`<b> Thanks ${req.body.username} ! I will reply to your message Shortly</b>` 
    };
   
   const response = await new Promise((rsv, rjt) => {
transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return rjt(error)
        } 
        rsv('Email sent'); 
    });
});
 mailOptions = {
    from: "200030003@iitdh.ac.in", 
    to: "200030003@iitdh.ac.in",
    subject: `${req.body.subject}`, 
    html:`${re.body.message}`,  
  };
 
  response = await new Promise((rsv, rjt) => {
transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
          return rjt(error)
      } 
      rsv('Email sent'); 
  });
});
})
module.exports=router;