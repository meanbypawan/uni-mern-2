import express from "express";
const app = express();
import mongoose from "mongoose";
import UserRouter from "./routes/user.route.js";
import bodyParser from "body-parser";
import CategoryRouter from "./routes/category.route.js";
mongoose.connect("mongodb://localhost:27017/ecommerce")
.then(result=>{
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());  
  app.use("/user",UserRouter);  
  app.use("/category",CategoryRouter);
  app.listen(3000,()=>{
     console.log("Server started....");
  });
}).catch(err=>console.log(err));