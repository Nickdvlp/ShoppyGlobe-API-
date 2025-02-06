import jwt from "jsonwebtoken";
import SECRET_KEY from "../secretKey.js";

export async function authMiddleware(req, res, next) {
  try {
    const token = req.header("Authorization");

    if (!token) {
      console.log("No token provided or incorrect format");
      return res
        .status(401)
        .json({ message: "Access denied, no token provided" });
    }

    console.log("Extracted Token:", token);

    const verified = jwt.verify(token, SECRET_KEY);
    console.log("Verified User ID:", verified.userId);

    req.userId = verified.userId;
    next(); // Proceed to next middleware
  } catch (err) {
    console.error("JWT Verification Error:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
}
