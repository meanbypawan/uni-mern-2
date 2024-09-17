import express from "express";
import db from "../db/dbConfig.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();
// http://localhost:3000/admin/sign-in
router.get("/sign-in",(request,response,next)=>{
  return response.render("sign-in.ejs",{isLoggedIn: request.session.isLoggedIn});
});
router.get("/dashboard",auth,(request,response,next)=>{
  return response.render("dashboard.ejs",{isLoggedIn: request.session.isLoggedIn});
})
router.post("/sign-in",(request,response,next)=>{
  let {email,password} = request.body;
  db.collection("admin").findOne({email, password})
  .then(result=>{
    if(result){
      console.log(result);
      request.session.currentUser = result.email;
      request.session.isLoggedIn = true;
      return response.redirect("/admin/dashboard");
    }
    else
     return response.redirect("/admin/sign-in");
  })
  .catch(err=>{
    console.log(err);
  });
});
export default router;