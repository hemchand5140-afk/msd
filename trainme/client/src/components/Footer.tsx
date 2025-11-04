import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 6,
        py: 4,
        borderTop: "1px solid rgba(0,0,0,0.06)",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} TrainMe — Built with ❤️ for consistent
        training.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="#" sx={{ mx: 1 }}>
          Terms
        </Link>
        <Link href="#" sx={{ mx: 1 }}>
          Privacy
        </Link>
        <Link href="#" sx={{ mx: 1 }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
