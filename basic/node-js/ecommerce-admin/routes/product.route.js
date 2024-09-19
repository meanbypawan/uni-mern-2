import express from "express";
import { auth } from "../middleware/auth.js";
import multer from "multer";
import db from "../db/dbConfig.js";
const upload = multer({dest: "public/images"});
// upload.single() , upload.array()
const router = express.Router();

router.get("/add",auth,(request,response,next)=>{
    return response.render("add-product.ejs",{isLoggedIn: request.session.isLoggedIn});
});
router.post("/add",auth,upload.single("product-image"),(request,response,next)=>{
  let fileName = "";
  if(request.file)
    fileName = request.file.filename;
  let {title,price,brand} = request.body;
  db.collection("product").insertOne({productImage: fileName,title,price,brand}).then(result=>{
    return response.redirect("/product/add");
  }).catch(err=>{
    console.log(err);
  });
});
export default router;