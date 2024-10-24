import { validationResult } from "express-validator";
import { User } from "../model/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
export const createNewPassword = async (request,response,next)=>{
  let {email,password} = request.body;
  let saltKey = bcrypt.genSaltSync(10);
  password = bcrypt.hashSync(password,saltKey);
  User.updateOne({email},{$set:{password}})
  .then(result=>{
    console.log(result);
    return response.status(201).json({message: "Password updated successfully.."});
  }).catch(err=>{
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
  })
}
export const forgetPassword = (request,response,next)=>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'uinformatics10@gmail.com',
      pass: 'aham mtjx dqxm uytm'
    }
  });
  
  var mailOptions = {
    from: 'uinformatics10@gmail.com',
    to: request.body.email,
    subject: 'Click on link to create new password',
    html: `<h1>Hi ${request.body.email}</h1>
    <p>Click on below button to create new password</p>
    <a href='http://localhost:3001/create-new-password?email=${request.body.email}'><button style='background-color: blue; color:white'>Create new password</button></a>
    <h3>Thanks and regards</h3>
    <h4>E-shop services.</h4>`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      return response.status(200).json({message: "Email sent successfully"});
    }
  });
}
export const fetchUser = (request,response,next)=>{
  User.find()
  .then(result=>{
    return response.status(200).json({users: result});
  }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
  })
}
export const signInAction = async (request,response,next)=>{
  try{
    let {email,password} = request.body;
    let user = await User.findOne({email});
    let encryptedPassword = user?.password;
    if(!user)
      return response.status(401).json({error: "Unauthorized user"});
    user.password = undefined;
    return User.checkPassword(password,encryptedPassword) ? response.status(200).json({message: "Sign in success",user,token:generateToken()}) : response.status(401).json({error: "Unauthorized user"});
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
  }
}
export const signUpAction = async (request,response,next)=>{
  try{ 
   const errors = validationResult(request);
   if(!errors.isEmpty())
     return response.status(400).json({error: errors.array()});
   let user = await User.create(request.body);
   return response.status(201).json({message: "Signup success",user});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }
}
const generateToken = (userId)=>{
    let payload = {subject: userId}; 
    let token = jwt.sign(payload,process.env.SECRET_KEY);
    return token;
}