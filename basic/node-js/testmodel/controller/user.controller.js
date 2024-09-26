import { validationResult } from "express-validator";
import { User } from "../model/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
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
    let token = jwt.sign(payload,"rerieordsfldferecvcvcvcbmveroreor");
    return token;
}