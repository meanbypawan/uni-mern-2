import { validationResult } from "express-validator";
import { User } from "../model/user.model.js"
import bcrypt from "bcryptjs";

export const signInAction = async (request,response,next)=>{
  try{
    let {email,password} = request.body;
    let user = await User.findOne({email});
    let encryptedPassword = user.password;
    if(!user)
      return response.status(401).json({error: "Unauthorized user"});
    user.password = undefined;
    return bcrypt.compareSync(password,encryptedPassword) ? response.status(200).json({message: "Sign in success",user}) : response.status(401).json({error: "Unauthorized user"});
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
   let saltKey = bcrypt.genSaltSync(10);
   let encryptedPassword = bcrypt.hashSync(request.body.password,saltKey); 
   request.body.password = encryptedPassword;
   let user = await User.create(request.body);
   return response.status(201).json({message: "Signup success",user});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }
}