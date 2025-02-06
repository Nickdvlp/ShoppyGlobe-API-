import express from "express";
import { getAllProducts } from "../Controller/getAllProducts.js";
import { getSingleProduct } from "../Controller/getSingleProduct.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getSingleProduct);

export default router;
