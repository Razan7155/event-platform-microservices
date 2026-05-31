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

import {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent
} from "../services/eventService";
function Events() {
  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");

  const [location, setLocation] = useState("");
  const [editingId, setEditingId] = useState(null);
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getEvents();
      setEvents(data);
    } catch {
      toast.error("Cannot load events");
    }
};
const handleCreate = async () => {

  try {

    if (editingId) {

      await updateEvent(editingId, {
        title,
        location
      });

      toast.success("Event updated");

    } else {

      await createEvent({
        title,
        location
      });

      toast.success("Event created");
    }

    setTitle("");
    setLocation("");
    setEditingId(null);

    fetchEvents();

  } catch {

    toast.error("Operation failed");
  }
};

const handleDelete = async (id) => {

  const confirmDelete =
    window.confirm("Delete this event?");

  if (!confirmDelete) return;

  try {

    await deleteEvent(id);

    toast.success("Event deleted");

    fetchEvents();

  } catch {

    toast.error("Delete failed");
  }
};

const handleEdit = (event) => {

  setEditingId(event.id);

  setTitle(event.title);

  setLocation(event.location);
};

const handleUpdate = async () => {

  try {

    await updateEvent(editingId, {
      title,
      location
    });

    toast.success("Event updated");

    setEditingId(null);

    setTitle("");

    setLocation("");

    fetchEvents();

  } catch {

    toast.error("Update failed");
  }
};
  return (

    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#020617 0%,#07122b 35%,#0f172a 70%,#111827 100%)",
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
                "linear-gradient(90deg,#ffffff,#22d3ee,#06b6d4)",

              WebkitBackgroundClip: "text",

              WebkitTextFillColor: "transparent",

              letterSpacing: "-3px"
            }}
          >
            Events Management
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "1.2rem",
              lineHeight: 1.8
            }}
          >
            Create and manage events professionally
          </Typography>

        </Box>

        <Card
          sx={{
            position: "relative",

            overflow: "hidden",

            borderRadius: 8,

            background:
              "linear-gradient(145deg,rgba(15,23,42,0.92),rgba(30,41,59,0.78))",

            backdropFilter: "blur(25px)",

            border:
              "1px solid rgba(255,255,255,0.08)",

            boxShadow:
              "0 25px 80px rgba(0,0,0,0.55)"
          }}
        >

          <Box
            sx={{
              position: "absolute",

              width: 300,

              height: 300,

              borderRadius: "50%",

              background:
                "radial-gradient(circle,#06b6d4 0%,#0891b2 35%,transparent 75%)",

              top: -120,

              right: -120,

              filter: "blur(90px)"
            }}
          />

          <CardContent
            sx={{
              p: 6,
              position: "relative",
              zIndex: 2
            }}
          >

            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "white" }}
              mb={5}
            >
              Create Event
            </Typography>

            <Stack spacing={4}>

              <TextField
                 fullWidth
                 label="Event Title"
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
                 sx={inputStyle}
              />

              <TextField
                 fullWidth
                 label="Location"
                 value={location}
                 onChange={(e) => setLocation(e.target.value)}
                 sx={inputStyle}
              />

              <Button
                variant="contained"
                sx={buttonStyle}
                onClick={handleCreate}
              >
                {editingId ? "Update Event" : "Add Event"}
              </Button>
              <Box mt={5}>

                {events.map((event) => (

                <Box
                 key={event.id}
                 sx={{
                 mb: 2,
                 p: 2,
                 borderRadius: 3,
                 background: "rgba(255,255,255,0.05)"
                }}
                >

                <Typography
                  sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1.1rem"
                  }}
                >
                  {event.title}
                </Typography>

                <Typography
                 sx={{
                 color: "#cbd5e1",
                 mt: 1
                }}
                >
                  {event.location}
                </Typography>
                <Button
                  onClick={() => handleDelete(event.id)}
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
                  onClick={() => handleEdit(event)}
                  
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

const inputStyle = {

  "& .MuiOutlinedInput-root": {

    borderRadius: 4,

    background:
      "rgba(255,255,255,0.03)",

    color: "white",

    fontSize: "1rem",

    "& fieldset": {
      borderColor:
        "rgba(148,163,184,0.15)"
    },

    "&:hover fieldset": {
      borderColor: "#06b6d4"
    },

    "&.Mui-focused fieldset": {
      borderColor: "#0891b2"
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

export default Events;