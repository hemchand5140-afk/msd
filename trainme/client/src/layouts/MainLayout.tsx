import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Avatar,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";
import { alpha } from "@mui/material/styles";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Workouts", path: "/workouts" },
    { text: "Nutrition", path: "/nutrition" },
    { text: "Progress", path: "/progress" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ width: 240 }}>
      {menuItems.map((item) => (
        <ListItem
          key={item.text}
          component={RouterLink}
          to={item.path}
          onClick={() => setMobileOpen(false)}
          button
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          backdropFilter: "blur(6px)",
          borderBottom: "1px solid rgba(0,0,0,0.04)",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "text.primary",
              fontWeight: 700,
            }}
          >
            TrainMe
          </Typography>

          {/* Search */}
          <Box
            sx={{
              position: "relative",
              mr: 2,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                height: "100%",
                display: "flex",
                alignItems: "center",
                pl: 1.5,
              }}
            >
              <SearchIcon color="action" />
            </Box>
            <InputBase
              placeholder="Search workouts, exercises..."
              sx={{
                pl: 5,
                pr: 2,
                py: 0.5,
                bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
                borderRadius: 2,
                width: 300,
              }}
            />
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={RouterLink}
                  to={item.path}
                >
                  {item.text}
                </Button>
              ))}

              <Button
                component={RouterLink}
                to="/login"
                variant="outlined"
                color="primary"
                sx={{ ml: 1 }}
              >
                Login
              </Button>
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                color="primary"
                sx={{ ml: 1 }}
              >
                Get Started
              </Button>

              <Avatar sx={{ width: 36, height: 36, ml: 2 }}>U</Avatar>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
              marginTop: "64px",
              borderRight: "none",
            },
            display: { xs: mobileOpen ? "block" : "none", sm: "block" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 4 },
          width: { sm: `calc(100% - 240px)` },
          marginLeft: { sm: "240px" },
          marginTop: "80px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
