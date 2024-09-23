import { User } from "../model/user.model.js"

export const signUpAction = (request,response,next)=>{
   User.create(request.body)
   .then(result=>{
     return response.status(201).json({message: "User saved",result});
   }).catch(err=>{
    return response.status(500).json({error: "Internal Server Error"});
   });   
}