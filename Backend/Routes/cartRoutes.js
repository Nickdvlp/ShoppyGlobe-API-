import express from "express";
import { addToCart } from "../Controller/addToCart.js";
import { updateCartItem } from "../Controller/updateCartItem.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import { deleteCartItem } from "../Controller/deleteCartItem.js";

const router = express.Router();

router.post("/cart", authMiddleware, addToCart);
router.put("/cart/:id", authMiddleware, updateCartItem);
router.delete("/cart/:product_id", authMiddleware, deleteCartItem);

export default router;
