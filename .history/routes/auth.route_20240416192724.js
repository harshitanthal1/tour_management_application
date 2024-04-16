import express from "express";
import {
  logOutController,
  loginController,
  signupController,
  test,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/test", test);

router.post("/signup", signupController);

router.post("/login", loginController);

router.get("/logout", logOutController);

export default router;
