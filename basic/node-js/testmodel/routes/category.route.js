import express from "express";
import { fetchCategory, saveInBulk, save, deletCategory } from "../controller/category.controller.js";
const router = express.Router();
router.post("/save-in-bulk",saveInBulk);
router.get("/list",fetchCategory);
router.post("/save",save);
router.delete("/:id",deletCategory);
export default router;