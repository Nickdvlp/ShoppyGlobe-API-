import express from "express";
import { authRegister } from "../Controller/authRegister.js";
import { authLogin } from "../Controller/authLogin.js";

const router = express.Router();

router.post("/user/register", authRegister);

router.post("/user/login", authLogin);

export default router;
