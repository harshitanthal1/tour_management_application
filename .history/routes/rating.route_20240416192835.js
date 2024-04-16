import express from "express";
import { requireSignIn } from "../middlewares/authMiddleware.js";
import {
  averageRating,
  getAllRatings,
  giveRating,
  ratingGiven,
} from "../controllers/rating.controller.js";

const router = express.Router();

router.post("/give-rating", requireSignIn, giveRating);

router.get("/average-rating/:id", averageRating);

router.get("/rating-given/:userId/:packageId", requireSignIn, ratingGiven);

router.get("/get-ratings/:id/:limit", getAllRatings);

export default router;
