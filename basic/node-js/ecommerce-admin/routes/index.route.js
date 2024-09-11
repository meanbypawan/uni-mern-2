import express from "express";
const router  = express.Router();

router.get("/",(request,response,next)=>{
    response.render("home.ejs");
})
router.get("/home",(request,response,next)=>{
    response.render("home.ejs");
});
router.get("/about",(request,response,next)=>{
    response.end("About page");
});
export default router;
