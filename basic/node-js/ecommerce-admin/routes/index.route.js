import express from "express";
const router  = express.Router();

router.get("/",(request,response,next)=>{
    response.render("home.ejs");
})
router.get("/home",(request,response,next)=>{
    response.render("home.ejs");
});
router.get("/about",(request,response,next)=>{
    response.render("about.ejs");
});
router.get("/contact",(request,response,next)=>{
  response.render("contact.ejs");
});
export default router;
