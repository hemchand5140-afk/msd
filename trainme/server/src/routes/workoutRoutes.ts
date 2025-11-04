import express from "express";
import {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutController";
import { protect } from "../middleware/auth";

const router = express.Router();

router.use(protect); // Protect all routes

router.route("/").post(createWorkout).get(getWorkouts);

router.route("/:id").get(getWorkout).put(updateWorkout).delete(deleteWorkout);

export default router;
