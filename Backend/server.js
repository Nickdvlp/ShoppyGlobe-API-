import express from "express";
import mongoose from "mongoose";
import productRoutes from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
import authRoutes from "./Routes/authRoute.js";

// See README file first....

const app = new express();
const port = 3000;
app.use(express.json());
mongoose.connect("mongodb://localhost:27017");
const db = mongoose.connection;

db.on("open", () => {
  console.log("Database Connected");
});

db.on("error", () => {
  console.log("There is something wrong to connect database");
});

app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", authRoutes);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
