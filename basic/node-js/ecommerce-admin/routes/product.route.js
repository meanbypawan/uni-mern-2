import express from "express";
import { auth } from "../middleware/auth.js";
import multer from "multer";
import db from "../db/dbConfig.js";
const upload = multer({dest: "public/images"});
// upload.single() , upload.array()
const router = express.Router();
router.get("/view",auth,(request,response,next)=>{
   db.collection("product").find().toArray()
   .then(result=>{
     return response.render("view-product.ejs",{
      isLoggedIn: request.session.isLoggedIn,
      productList: result
     });
   }).catch(err=>{
    console.log(err);
   })
});
router.get("/add",auth,(request,response,next)=>{
    db.collection("category").find().toArray()
    .then(result=>{
      return response.render("add-product.ejs",{isLoggedIn: request.session.isLoggedIn, categoryList: result});
    }).catch(err=>{
      console.log(err);
    })

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

router.get("/list",(request,response,next)=>{
   db.collection("product").find().toArray()
   .then(result=>{
    return response.status(200).json({productList: result});
   })
   .catch(err=>{
    console.log(err);
   });
});
export default router;