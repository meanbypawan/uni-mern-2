import express from "express";
import { placeOrder } from "../controller/order.controller.js";
const router = express.Router();
// http://localhost:3000/order/place-order
router.post("/place-order",placeOrder);
export default router;