import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

import {
  Link
} from "react-router-dom";

function Navbar() {

  const navItems = [
    {
      label: "Dashboard",
      path: "/"
    },
    {
      label: "Login",
      path: "/login"
    },
    {
      label: "Users",
      path: "/users"
    },
    {
      label: "Events",
      path: "/events"
    },
    {
      label: "Register",
      path: "/register"
    }
  ];

  return (

    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background:
          "rgba(2,6,23,0.75)",

        backdropFilter: "blur(18px)",

        borderBottom:
          "1px solid rgba(255,255,255,0.06)"
      }}
    >

      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1
        }}
      >

        {/* LOGO */}

        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            background:
              "linear-gradient(90deg,#ffffff,#60a5fa,#a78bfa)",

            WebkitBackgroundClip: "text",

            WebkitTextFillColor: "transparent",

            letterSpacing: "-1px"
          }}
        >
          Event Platform
        </Typography>

        {/* NAVIGATION */}

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap"
          }}
        >

          {navItems.map((item, index) => (

            <Button
              key={index}

              component={Link}

              to={item.path}

              sx={{

                color: "white",

                textTransform: "none",

                fontWeight: "bold",

                fontSize: "0.95rem",

                borderRadius: 3,

                px: 2.5,

                py: 1,

                transition: "0.3s",

                "&:hover": {

                  background:
                    "rgba(255,255,255,0.08)",

                  transform:
                    "translateY(-2px)"
                }
              }}
            >

              {item.label}

            </Button>

          ))}

        </Box>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;