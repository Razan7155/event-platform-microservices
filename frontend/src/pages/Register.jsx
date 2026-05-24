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
import { useState, useEffect } from "react";

import toast from "react-hot-toast";

import {
  createRegistration,
  getRegistrations,
  updateRegistration,
  deleteRegistration
} from "../services/registrationService";
function Register() {
  const [userId, setUserId] = useState("");

  const [eventId, setEventId] = useState(""); 
  const [registrations, setRegistrations] = useState([]);
  const [editingId, setEditingId] = useState(null);
  useEffect(() => {
  fetchRegistrations();
  }, []);
  const fetchRegistrations = async () => {

  try {

    const data = await getRegistrations();

    setRegistrations(data);

  } catch (error) {

  toast.error(
    error.response?.data?.message || "Cannot load registrations"
  );
  }
};
  const handleRegister = async () => {

  try {

    if (editingId) {

      await updateRegistration(editingId, {
        userId,
        eventId
      });

      toast.success("Registration updated");

      setEditingId(null);

    } else {

      await createRegistration({
        userId,
        eventId
      });

      toast.success("Registration created");
    }

    setUserId("");
    setEventId("");

    fetchRegistrations();

  } catch (error) {

  console.log(error);

  toast.error(
    error.message ||
    error.response?.data?.message ||
    "Operation failed"
  );
 }
};
const handleDelete = async (id) => {

  const confirmDelete =
    window.confirm("Delete registration?");

  if (!confirmDelete) return;

  try {

    await deleteRegistration(id);

    toast.success("Registration deleted");

    fetchRegistrations();

  } catch {

    toast.error("Delete failed");
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
            Registration
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "1.2rem"
            }}
          >
            Register users to platform events
          </Typography>

        </Box>

        <Card sx={cardStyle}>

          <CardContent sx={{ p: 6 }}>

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "white" }}
              mb={5}
            >
              Create Registration
            </Typography>

            <Stack spacing={4}>

              <TextField
                fullWidth
                label="User ID"
                sx={inputStyle}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />

              <TextField
                fullWidth
                label="Event ID"
                sx={inputStyle}
                value={eventId}
                onChange={(e) => setEventId(e.target.value)}
              />

              <Button
                variant="contained"
                sx={buttonStyle}
                onClick={handleRegister}
              >
              
                {editingId ? "Update Registration" : "Register User"}
              </Button>
              <Box mt={5}>

                  {registrations.map((reg) => (

                 <Box
                    key={reg.id}
                    sx={{
                      mb: 2,
                      p: 2,
                      borderRadius: 3,
                      background: "rgba(255,255,255,0.05)"
                    }}
                  >

                  <Typography sx={{ color: "white" }}>
                    User ID: {reg.userId}
                  </Typography>

                  <Typography sx={{ color: "white" }}>
                    Event ID: {reg.eventId}
                  </Typography>

                  <Button
                    
                    onClick={() => handleDelete(reg.id)}
                    
                  sx={{
                    mr: 2,
                    backgroundColor: "#ef4444",
                    fontWeight: "normal",
                    color: "white"
                  }}
                  >
                   Delete
                  </Button>

                  <Button
                  onClick={() => {
                     setEditingId(reg.id);
                     setUserId(reg.userId);
                     setEventId(reg.eventId);
                  }}
                  sx={{
                    backgroundColor: "#3b82f6",
                    fontWeight: "normal",
                    color: "white"
                  }}
                  >
                  Edit
                  </Button>

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
      borderColor: "#8b5cf6"
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
    "linear-gradient(90deg,#2563eb,#4f46e5)",
  transition: "0.35s",

  "&:hover": {

    transform: "translateY(-3px)",

    background:
      "linear-gradient(135deg,#0891b2,#2563eb)",

    boxShadow:
      "0 18px 45px rgba(6,182,212,0.55)"
  }
};

export default Register;