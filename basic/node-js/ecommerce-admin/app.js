import express from "express";
import IndexRouter from "./routes/index.route.js";
import AdminRouter from "./routes/admin.route.js";
import ProductRouter from "./routes/product.route.js";
const app = express();

app.set("view engine","ejs");
// http://localhost:3000
app.use("/",IndexRouter);

// http://localhost:3000/admin/
app.use("/admin",AdminRouter);

// http://localhost:3000/product/add
app.use("/product",ProductRouter);

app.listen(3000,()=>{
    console.log("Server Running at http://localhost:3000");
});