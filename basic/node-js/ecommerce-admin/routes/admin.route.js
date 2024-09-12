import express from "express";

const router = express.Router();
// http://localhost:3000/admin/sign-in
router.get("/sign-in",(request,response,next)=>{
  return response.render("sign-in.ejs");
});
export default router;