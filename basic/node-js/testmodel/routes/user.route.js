import express from "express";
import { signInAction, signUpAction, fetchUser } from "../controller/user.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post("/signup",
 body("email","Invalid email id").notEmpty().isEmail()
,body("password","Password must contain at least 5 letter").notEmpty().isLength({min: 5}),
 body("contact","Only digits are allowed").notEmpty().isNumeric(),signUpAction);

 // http://localhost:3000/user/sign-in
 router.post("/sign-in",signInAction);
 router.get("/list",fetchUser);
export default router;