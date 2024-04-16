import express from "express";
import {
  deleteUserAccount,
  deleteUserAccountAdmin,
  getAllUsers,
  updateProfilePhoto,
  updateUser,
  updateUserPassword,
} from "../controllers/user.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/user-auth", requireSignIn, (req, res) => {
  return res.status(200).send({ check: true });
});

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ check: true });
});

router.post("/update/:id", requireSignIn, updateUser);

router.post("/update-profile-photo/:id", requireSignIn, updateProfilePhoto);

router.post("/update-password/:id", requireSignIn, updateUserPassword);

router.delete("/delete/:id", requireSignIn, deleteUserAccount);

router.get("/getAllUsers", requireSignIn, isAdmin, getAllUsers);

router.delete(
  "/delete-user/:id",
  requireSignIn,
  isAdmin,
  deleteUserAccountAdmin
);

export default router;
