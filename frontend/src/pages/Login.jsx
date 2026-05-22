import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Stack
} from "@mui/material";


import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { loginUser }
  from "../services/authService";
import {
  useAuth
} from "../context/AuthContext";


function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  const handleLogin = async () => {

  try {

    setLoading(true);

    const response =
      await loginUser({
        email,
        password
      });

    login(response.token);
    console.log(response);
    toast.success("Login successful");

    navigate("/");

  } catch (error) {

    toast.error("Invalid credentials");

  } finally {

    setLoading(false);
  }
};
  return (

    <Box
      sx={{

        height: "calc(100vh - 64px)",

        background:
          "linear-gradient(135deg,#020617 0%,#081126 40%,#0a1633 100%)",

        display: "flex",

        alignItems: "center",

        justifyContent: "center",

        overflow: "hidden",

        px: 2
      }}
    >

      <Container maxWidth="xs">

        <Box textAlign="center" mb={2}>

          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{

              mb: 1,

              background:
                "linear-gradient(90deg,#ffffff,#60a5fa,#a78bfa)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent"
            }}
          >
            Welcome Back
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "0.95rem"
            }}
          >
            Secure login to Event Platform
          </Typography>

        </Box>

        <Card
          sx={{

            position: "relative",

            overflow: "hidden",

            borderRadius: 5,

            background:
              "linear-gradient(145deg,rgba(15,23,42,0.92),rgba(30,41,59,0.78))",

            backdropFilter: "blur(20px)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            boxShadow:
              "0 20px 60px rgba(0,0,0,0.45)"
          }}
        >

          <Box
            sx={{

              position: "absolute",

              width: 220,

              height: 220,

              borderRadius: "50%",

              background:
                "radial-gradient(circle,#4f46e5 0%,transparent 70%)",

              top: -100,

              right: -100,

              filter: "blur(80px)"
            }}
          />

          <CardContent
            sx={{
              p: 3,
              position: "relative",
              zIndex: 2
            }}
          >

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 2
              }}
            >

              <Box
                sx={{

                  width: 60,

                  height: 60,

                  borderRadius: "50%",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  background:
                    "linear-gradient(135deg,#2563eb,#4f46e5)"
                }}
              >

                <LockOutlinedIcon
                  sx={{
                    color: "white",
                    fontSize: 30
                  }}
                />

              </Box>

            </Box>

            <Typography
              variant="h5"
              fontWeight="bold"
              color="white"
              textAlign="center"
              mb={3}
            >
              Login
            </Typography>

            <Stack spacing={2.5}>

              <TextField
                fullWidth
                size="small"
                label="Email"
                type="email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
                sx={inputStyle}
              />

              <TextField
                fullWidth
                size="small"
                label="Password"
                type="password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
                sx={inputStyle}
              />

              <Button
                variant="contained"
                sx={buttonStyle}
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign In"}
              </Button>
            </Stack>

          </CardContent>

        </Card>

      </Container>

    </Box>
  );
}

const inputStyle = {

  "& .MuiOutlinedInput-root": {

    borderRadius: 3,

    background:
      "rgba(255,255,255,0.03)",

    color: "white",

    "& fieldset": {

      borderColor:
        "rgba(148,163,184,0.15)"
    },

    "&:hover fieldset": {

      borderColor: "#60a5fa"
    },

    "&.Mui-focused fieldset": {

      borderColor: "#4f46e5"
    }
  },

  "& .MuiInputLabel-root": {

    color: "#94a3b8"
  }
};

const buttonStyle = {

  py: 1.2,

  borderRadius: 3,

  fontWeight: "bold",

  fontSize: "0.95rem",

  textTransform: "none",

  background:
    "linear-gradient(90deg,#2563eb,#4f46e5)",

  boxShadow:
    "0 10px 30px rgba(59,130,246,0.35)",

  transition: "0.3s",

  "&:hover": {

    transform: "translateY(-2px)",

    background:
      "linear-gradient(90deg,#1d4ed8,#4338ca)"
  }
};

export default Login;