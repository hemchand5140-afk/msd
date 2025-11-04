import mongoose, { Document, Schema } from "mongoose";

export interface IExercise {
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  duration?: number;
  restPeriod?: number;
}

export interface IWorkout extends Document {
  user: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  exercises: IExercise[];
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number; // in minutes
  calories?: number;
  date: Date;
  completed: boolean;
  notes?: string;
}

const exerciseSchema = new Schema<IExercise>({
  name: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  restPeriod: {
    type: Number,
  },
});

const workoutSchema = new Schema<IWorkout>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  exercises: [exerciseSchema],
  difficulty: {
    type: String,
    enum: ["beginner", "intermediate", "advanced"],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  notes: {
    type: String,
  },
});

export const Workout = mongoose.model<IWorkout>("Workout", workoutSchema);
