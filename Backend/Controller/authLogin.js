import User from "../Model/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import SECRET_KEY from "../secretKey.js";

export async function authLogin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "email or password are invalid" });
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: "credentials are invalid" });
  }

  const token = jwt.sign({ userId: user._id.toString() }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(200).json({ message: token });
}
