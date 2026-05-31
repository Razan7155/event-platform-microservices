import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box
} from "@mui/material";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  useAuth
} from "../context/AuthContext";

import toast from "react-hot-toast";

function Navbar() {

  const navigate = useNavigate();

  const {
    token,
    logout
  } = useAuth();

  const navItems = [
    {
      label: "Dashboard",
      path: "/"
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

  const handleLogout = () => {

    logout();

    toast.success("Logged out");

    navigate("/login");
  };

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

          {/* LOGIN / LOGOUT */}

          {token ? (

            <Button
              onClick={handleLogout}

              sx={{
                color: "white",

                fontWeight: "bold",

                textTransform: "none"
              }}
            >
              Logout
            </Button>

          ) : (

            <Button
              component={Link}
              to="/login"

              sx={{
                color: "white",

                fontWeight: "bold",

                textTransform: "none"
              }}
            >
              Login
            </Button>
          )}

        </Box>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;