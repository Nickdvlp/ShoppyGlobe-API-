import Product from "../Model/productSchema.js";
// import express from "express";

// app.use(express.json());

export async function getSingleProduct(req, res) {
  const products = await Product.findById(req.params.id);
  res.status(200).json(products);
}
