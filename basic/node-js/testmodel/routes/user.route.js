import express from "express";
import { signUpAction } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup",signUpAction);

export default router;