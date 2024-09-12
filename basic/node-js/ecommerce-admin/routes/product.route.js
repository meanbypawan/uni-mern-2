import express from "express";
const router = express.Router();

router.get("/add",(request,response,next)=>{
    return response.render("add-product.ejs");
})
export default router;