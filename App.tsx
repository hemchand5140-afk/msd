import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/workouts"
          element={<div>Workouts Page (Coming Soon)</div>}
        />
        <Route
          path="/nutrition"
          element={<div>Nutrition Page (Coming Soon)</div>}
        />
        <Route
          path="/progress"
          element={<div>Progress Page (Coming Soon)</div>}
        />
      </Routes>
    </MainLayout>
  );
};

export default App;
