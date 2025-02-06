import User from "../Model/userSchema.js";
import bcrypt from "bcrypt";

export async function authRegister(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "all fields are required" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, password: hashedPassword });
  user.save();
  res.status(200).json({ message: "user registered successfully" });
}
