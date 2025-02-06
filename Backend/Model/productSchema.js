import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  imageUrl: String,
  description: String,
  category: Array,
  available: Boolean,
});

const Product = mongoose.model("products", productSchema);

export default Product;
