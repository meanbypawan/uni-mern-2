import express from "express";
import IndexRouter from "./routes/index.route.js";
const app = express();

app.set("view engine","ejs");
app.use("/",IndexRouter);

app.listen(3000,()=>{
    console.log("Server Running at http://localhost:3000");
});