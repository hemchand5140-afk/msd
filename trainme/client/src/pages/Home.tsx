import React from "react";
import { Typography, Box, Grid, Card, CardContent, Stack } from "@mui/material";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import TimelineIcon from "@mui/icons-material/Timeline";

const Home: React.FC = () => {
  const features = [
    {
      title: "Personalized Workouts",
      description: "Plans tailored to your goals, equipment and schedule.",
      icon: <FitnessCenterIcon fontSize="large" color="primary" />,
    },
    {
      title: "Nutrition Tracking",
      description: "Track meals, calories and macros effortlessly.",
      icon: <RestaurantMenuIcon fontSize="large" color="primary" />,
    },
    {
      title: "Progress Analytics",
      description:
        "Visualize your improvements with clean charts and insights.",
      icon: <TimelineIcon fontSize="large" color="primary" />,
    },
  ];

  return (
    <Box>
      <Hero />

      <Typography variant="h5" sx={{ mb: 2 }}>
        What you can do with TrainMe
      </Typography>

      <Grid container spacing={3}>
        {features.map((f) => (
          <Grid item xs={12} md={4} key={f.title}>
            <Card>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  {f.icon}
                  <Box>
                    <Typography variant="h6">{f.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {f.description}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Testimonials
        </Typography>
        <Typography color="text.secondary">
          “TrainMe helped me get consistent — I love the clear plans and
          progress charts.” — Alex
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;
