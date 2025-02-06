import Product from "../Model/productSchema.js";
// import express from "express";

// app.use(express.json());

export async function getAllProducts(req, res) {
  const products = await Product.find();
  res.status(200).json(products);
}
