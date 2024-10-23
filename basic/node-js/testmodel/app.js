import express from "express";
const app = express();
import mongoose from "mongoose";
import UserRouter from "./routes/user.route.js";
import bodyParser from "body-parser";
import CategoryRouter from "./routes/category.route.js";
import ProductRouter from "./routes/product.route.js";
import CartRouter from "./routes/cart.route.js";
import cors from "cors";
import OrderRouter from "./routes/order.route.js";
mongoose.connect("mongodb://localhost:27017/ecommerce")
.then(result=>{
  app.use(cors());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());  
  app.use("/user",UserRouter);  
  app.use("/category",CategoryRouter);
  app.use("/product",ProductRouter);
  app.use("/cart",CartRouter);
  app.use("/order",OrderRouter);
  app.listen(3000,()=>{
     console.log("Server started....");
  });
}).catch(err=>console.log(err));