import mongoose, { Document, Schema } from "mongoose";

export interface IProgress extends Document {
  user: mongoose.Types.ObjectId;
  date: Date;
  weight: number;
  bodyFat?: number;
  measurements?: {
    chest?: number;
    waist?: number;
    hips?: number;
    arms?: number;
    thighs?: number;
  };
  photos?: string[];
  notes?: string;
}

const progressSchema = new Schema<IProgress>({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  weight: {
    type: Number,
    required: true,
  },
  bodyFat: {
    type: Number,
  },
  measurements: {
    chest: Number,
    waist: Number,
    hips: Number,
    arms: Number,
    thighs: Number,
  },
  photos: [
    {
      type: String,
    },
  ],
  notes: {
    type: String,
  },
});

export const Progress = mongoose.model<IProgress>("Progress", progressSchema);
