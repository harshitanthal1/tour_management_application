import express, { Router } from "express";
import {
  bookPackage,
  cancelBooking,
  deleteBookingHistory,
  getAllBookings,
  getAllUserBookings,
  getCurrentBookings,
  getUserCurrentBookings,
} from "../controllers/booking.controller.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/book-package/:packageId", requireSignIn, bookPackage);

router.get("/get-currentBookings", requireSignIn, isAdmin, getCurrentBookings);

router.get("/get-allBookings", requireSignIn, isAdmin, getAllBookings);

router.get(
  "/get-UserCurrentBookings/:id",
  requireSignIn,
  getUserCurrentBookings
);

//get all bookings by user id
router.get("/get-allUserBookings/:id", requireSignIn, getAllUserBookings);

//delete history of booking
router.delete(
  "/delete-booking-history/:id/:userId",
  requireSignIn,
  deleteBookingHistory
);

//cancle booking by id
router.post("/cancel-booking/:id/:userId", requireSignIn, cancelBooking);

export default router;
