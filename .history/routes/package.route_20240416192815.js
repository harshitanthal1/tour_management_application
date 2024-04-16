import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  braintreeTokenController,
  createPackage,
  deletePackage,
  getPackageData,
  getPackages,
  updatePackage,
} from "../controllers/package.controller.js";

const router = express.Router();

router.post("/create-package", requireSignIn, isAdmin, createPackage);

router.post("/update-package/:id", requireSignIn, isAdmin, updatePackage);

router.delete("/delete-package/:id", requireSignIn, isAdmin, deletePackage);

router.get("/get-packages", getPackages);

router.get("/get-package-data/:id", getPackageData);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

export default router;
