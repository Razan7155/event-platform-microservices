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

import { useEffect, useState } from "react";

import toast from "react-hot-toast";

import API from "../services/api";
import {
  getUsers,
  createUser
} from "../services/userService";
function Users() {
  const [users, setUsers] =
    useState([]);

  const [name, setName] =
   useState("");

  const [email, setEmail] =
   useState("");

  const [password, setPassword] =
    useState("");
  useEffect(() => {

  fetchUsers();

}, []);

const fetchUsers = async () => {

  try {

    const data =
      await getUsers();

    setUsers(data);

  } catch {

    toast.error("Cannot load users");
  }
};
const handleCreate = async () => {

  try {

    await createUser({
      name,
      email,
      password
    });

    toast.success("User created");

    fetchUsers();

  } catch {

    toast.error("Error creating user");
  }
};
  return (

    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617 0%,#081126 40%,#0a1633 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: 10
      }}
    >

      <Container maxWidth="md">

        <Box textAlign="center" mb={7}>

          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: "3rem",
                md: "5rem"
              },

              lineHeight: 1,

              mb: 2,

              background:
                "linear-gradient(90deg,#ffffff,#60a5fa,#a78bfa)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent"
            }}
          >
            Users Management
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "1.2rem"
            }}
          >
            Manage platform users professionally
          </Typography>

        </Box>

        <Card sx={cardStyle}>

          <CardContent sx={{ p: 6 }}>

            <Typography
              variant="h4"
              fontWeight="bold"
              color="white"
              mb={5}
            >
              Create User
            </Typography>

            <Stack spacing={4}>
 
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={inputStyle}
              />

              <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={inputStyle}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={inputStyle}
              />

              <Button
                variant="contained"
                sx={buttonStyle}
                onClick={handleCreate}
              >
                Add User
              </Button>
            <Box mt={5}>

              {users.map((user) => (

               <Box
                key={user.id}
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: 3,
                  background:
                    "rgba(255,255,255,0.05)"
                }}
              >

                <Typography color="white">
                  {user.name}
                </Typography>

                <Typography color="#94a3b8">
                  {user.email}
                </Typography>

            </Box>
      ))}
      </Box>

            </Stack>

          </CardContent>

        </Card>

      </Container>

    </Box>
  );
}

const cardStyle = {
  borderRadius: 7,
  background:
    "linear-gradient(145deg,rgba(15,23,42,0.92),rgba(30,41,59,0.78))",
  backdropFilter: "blur(25px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow:
    "0 25px 80px rgba(0,0,0,0.55)"
};

const inputStyle = {

  "& .MuiOutlinedInput-root": {

    borderRadius: 4,

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

  py: 1.8,

  borderRadius: 4,

  fontWeight: "bold",

  textTransform: "none",

  background:
    "linear-gradient(90deg,#2563eb,#4f46e5)"
};

export default Users;