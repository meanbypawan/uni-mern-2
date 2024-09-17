import express from "express";
const router  = express.Router();

router.get("/",(request,response,next)=>{
    return response.render("home.ejs",{isLoggedIn: request.session.isLoggedIn});
})
router.get("/home",(request,response,next)=>{
    response.redirect("/");
});
router.get("/about",(request,response,next)=>{
    response.render("about.ejs",{isLoggedIn: request.session.isLoggedIn});
});
router.get("/contact",(request,response,next)=>{
  response.render("contact.ejs",{isLoggedIn: request.session.isLoggedIn});
});
export default router;
