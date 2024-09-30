import express from "express";
import { saveInBulk, fetchProducts, getProduct } from "../controller/product.controller.js";
const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/list", fetchProducts);
router.get("/:id",getProduct);
export default router;