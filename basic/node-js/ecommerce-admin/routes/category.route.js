import express from "express";
import { auth } from "../middleware/auth.js";
import db from "../db/dbConfig.js";
import mongoose from "mongoose";
const router = express.Router();

router.get("/add",auth,(request,response,next)=>{
   return response.render("add-category.ejs",{isLoggedIn: request.session.isLoggedIn,message:""});    
});
router.post("/add",auth,(request,response,next)=>{
    let {category} = request.body;
    db.collection("category").insertOne({category})
    .then(result=>{
        return response.render("add-category.ejs",{isLoggedIn: request.session.isLoggedIn, message: "category saved successfully.."});
    }).catch(err=>{
        console.log(err);
    });
});
router.get("/view",auth,(request,response,next)=>{
  db.collection("category").find().toArray()
  .then(result=>{
    return response.render("view-category.ejs",{
        isLoggedIn: request.session.isLoggedIn,
        categoryList: result
    })
  }).catch(err=>{
    console.log(err);
    // you have render error.ejs
  })
});

router.get("/delete/:id",auth,(request,response,next)=>{
  let id = request.params.id;
  // ObjectId("dfljkd334dkfhsdfd")
  db.collection("category").deleteOne({_id: new mongoose.Types.ObjectId(id)})
  .then(result=>{
    return response.redirect("/category/view");
  }).catch(err=>{
    console.log(err);
  })
});
export default router;