import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/ecommerce")
.then(result=>{
    console.log("Database connected...")
}).catch(err=>{
    console.log("Database connection failed");
    console.log(err);
});

export default mongoose.connection; // db
