import mongoose, { Document, Schema } from "mongoose";

export interface IMeal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  time: Date;
}

export interface INutrition extends Document {
  user: mongoose.Types.ObjectId;
  date: Date;
  meals: IMeal[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
  waterIntake: number;
  notes?: string;
}

const mealSchema = new Schema<IMeal>({
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  protein: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  fats: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

const nutritionSchema = new Schema<INutrition>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  meals: [mealSchema],
  totalCalories: {
    type: Number,
    default: 0,
  },
  totalProtein: {
    type: Number,
    default: 0,
  },
  totalCarbs: {
    type: Number,
    default: 0,
  },
  totalFats: {
    type: Number,
    default: 0,
  },
  waterIntake: {
    type: Number,
    default: 0,
  },
  notes: {
    type: String,
  },
});

// Calculate totals before saving
nutritionSchema.pre("save", function (next) {
  if (this.meals.length > 0) {
    this.totalCalories = this.meals.reduce(
      (sum, meal) => sum + meal.calories,
      0
    );
    this.totalProtein = this.meals.reduce((sum, meal) => sum + meal.protein, 0);
    this.totalCarbs = this.meals.reduce((sum, meal) => sum + meal.carbs, 0);
    this.totalFats = this.meals.reduce((sum, meal) => sum + meal.fats, 0);
  }
  next();
});

export const Nutrition = mongoose.model<INutrition>(
  "Nutrition",
  nutritionSchema
);
