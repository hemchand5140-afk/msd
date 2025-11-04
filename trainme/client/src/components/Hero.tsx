import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        p: { xs: 3, md: 6 },
        mb: 4,
        background:
          "linear-gradient(135deg, rgba(15,118,110,0.08), rgba(124,58,237,0.06))",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        TrainSmarter. Track Better. Reach Goals.
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ maxWidth: 720, mb: 3 }}
      >
        Personalized workout plans, nutrition tracking and progress analytics —
        all in one place. Designed for real people who want simple, beautiful
        tools to stay consistent.
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Button variant="contained" color="primary" size="large">
          Start Free
        </Button>
        <Button variant="outlined" color="primary" size="large">
          Explore Workouts
        </Button>
      </Stack>
    </Box>
  );
};

export default Hero;
