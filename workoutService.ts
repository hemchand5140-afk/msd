import api from "./api";

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  weight?: number;
  duration?: number;
  restPeriod?: number;
}

export interface Workout {
  _id: string;
  name: string;
  description?: string;
  exercises: Exercise[];
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  calories?: number;
  date: string;
  completed: boolean;
  notes?: string;
}

export const workoutService = {
  async getWorkouts(): Promise<Workout[]> {
    const response = await api.get("/workouts");
    return response.data;
  },

  async getWorkout(id: string): Promise<Workout> {
    const response = await api.get(`/workouts/${id}`);
    return response.data;
  },

  async createWorkout(workout: Omit<Workout, "_id">): Promise<Workout> {
    const response = await api.post("/workouts", workout);
    return response.data;
  },

  async updateWorkout(id: string, workout: Partial<Workout>): Promise<Workout> {
    const response = await api.put(`/workouts/${id}`, workout);
    return response.data;
  },

  async deleteWorkout(id: string): Promise<void> {
    await api.delete(`/workouts/${id}`);
  },
};
