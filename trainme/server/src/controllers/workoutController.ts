import { Request, Response } from "express";
import { Workout } from "../models/Workout";

interface AuthRequest extends Request {
  user?: any;
}

// @desc    Create new workout
// @route   POST /api/workouts
// @access  Private
export const createWorkout = async (req: AuthRequest, res: Response) => {
  try {
    const workout = await Workout.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get user workouts
// @route   GET /api/workouts
// @access  Private
export const getWorkouts = async (req: AuthRequest, res: Response) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });
    res.json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get single workout
// @route   GET /api/workouts/:id
// @access  Private
export const getWorkout = async (req: AuthRequest, res: Response) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    // Make sure user owns workout
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    res.json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update workout
// @route   PUT /api/workouts/:id
// @access  Private
export const updateWorkout = async (req: AuthRequest, res: Response) => {
  try {
    let workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    // Make sure user owns workout
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    workout = await Workout.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete workout
// @route   DELETE /api/workouts/:id
// @access  Private
export const deleteWorkout = async (req: AuthRequest, res: Response) => {
  try {
    const workout = await Workout.findById(req.params.id);

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    // Make sure user owns workout
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await workout.deleteOne();

    res.json({ message: "Workout removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
