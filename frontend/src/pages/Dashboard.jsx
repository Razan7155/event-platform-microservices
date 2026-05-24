import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Container
} from "@mui/material";
const cardStyle = {
  borderRadius: 5,
  background:
    "linear-gradient(145deg,rgba(15,23,42,0.92),rgba(30,41,59,0.78))",
  backdropFilter: "blur(25px)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow:
    "0 25px 80px rgba(0,0,0,0.55)"
};
import {
  Link
} from "react-router-dom";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BlurOnIcon from "@mui/icons-material/BlurOn";

import { useEffect, useState } from "react";
import {
  getUsersCount,
  getEventsCount,
  getRegistrationsCount
} from "../services/dashboardService";
function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [eventsCount, setEventsCount] = useState(0);
  const [registrationsCount, setRegistrationsCount] = useState(0);
  useEffect(() => {
  loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const users = await getUsersCount();
      const events = await getEventsCount();
      const regs = await getRegistrationsCount();

      setUsersCount(users);
      setEventsCount(events);
      setRegistrationsCount(regs);

    } catch (err) {
      console.log(err);
  }
};
  
  const services = [
    {
      title: "Users",
      desc: "Manage platform users professionally",
      path: "/users"
    },
    {
      title: "Events",
      desc: "Create and manage events efficiently",
      path: "/events"
    },
    {
      title: "Registrations",
      desc: "Register users to platform events",
      path: "/register"
    }
  ];
  const stats = [
  {
    label: "Users",
    value: usersCount
  },
  {
    label: "Events",
    value: eventsCount
  },
  {
    label: "Registrations",
    value: registrationsCount
  }
];
  return (

    <Box
      sx={{
        background:
          "linear-gradient(135deg,#020617 0%,#081126 40%,#0a1633 100%)",
        color: "white",
        overflow: "hidden"
      }}
    >

      {/* HERO */}

      <Container maxWidth="xl">

        <Grid
          container
          spacing={4}
          sx={{
            minHeight: "100vh",
            alignItems: "center"
          }}
        >

          {/* LEFT */}

          <Grid item xs={12} md={6}>

            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "3rem",
                  md: "5rem"
                },
                lineHeight: 1.05,
                mb: 4,
                background:
                  "linear-gradient(90deg,#ffffff,#60a5fa,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >

              Build Event
              
              Platform
              <br />
              Securely

            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "#94a3b8",
                mb: 5,
                maxWidth: 650,
                lineHeight: 1.8
              }}
            >

              Event management platform powered by
              Spring Boot microservices, Eureka Discovery,
              API Gateway and React.

            </Typography>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="#services"
              sx={{
                px: 5,
                py: 1.8,
                borderRadius: 4,
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "1rem",
                background:
                  "linear-gradient(90deg,#2563eb,#4f46e5)",
                boxShadow:
                  "0 12px 35px rgba(59,130,246,0.4)",

                "&:hover": {
                  background:
                    "linear-gradient(90deg,#1d4ed8,#4338ca)"
                }
              }}
            >

              Explore Services

            </Button>

          </Grid>

          {/* RIGHT */}

          <Grid item xs={12} md={6}>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >

              <Box
                sx={{
                  width: 450,
                  height: 450,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle,#4338ca,#1e1b4b)",
                  filter: "blur(12px)",
                  boxShadow:
                    "0 0 120px rgba(99,102,241,0.8)"
                }}
              />

              <BlurOnIcon
                sx={{
                  position: "absolute",
                  fontSize: 170,
                  color: "#93c5fd"
                }}
              />

            </Box>

          </Grid>

        </Grid>

      </Container>
      {/* STATS */}

      <Container maxWidth="lg">

      <Grid
       container
       spacing={4}
       justifyContent="center"
       sx={{ mb: 14 }}
      >

      {stats.map((stat, index) => (

      <Grid item xs={12} sm={6} md={4} key={index}>

        <Card
          sx={{
            ...cardStyle,
            p: 4,
            textAlign: "center",
            transition: "0.35s",

            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow:
                "0 20px 60px rgba(59,130,246,0.25)"
            }
          }}
        >

          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              mb: 1,
              background:
                "linear-gradient(90deg,#60a5fa,#a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {stat.value}
          </Typography>

          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: "1.1rem"
            }}
          >
            {stat.label}
          </Typography>

        </Card>

      </Grid>

    ))}

  </Grid>

</Container>
      {/* SERVICES */}

      <Box
        id="services"
        sx={{
          py: 16,
          position: "relative",
          overflow: "hidden"
        }}
      >

        {/* BACKGROUND EFFECTS */}

        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#2563eb22 0%,transparent 70%)",
            top: -150,
            left: -150,
            filter: "blur(80px)"
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle,#7c3aed22 0%,transparent 70%)",
            bottom: -150,
            right: -150,
            filter: "blur(80px)"
          }}
        />

        <Container maxWidth="xl">

          {/* TITLE */}

          <Box textAlign="center" mb={10}>

            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                mb: 2,
                background:
                  "linear-gradient(90deg,#ffffff,#60a5fa,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-2px"
              }}
            >
              Platform Services
            </Typography>

            <Typography
              sx={{
                color: "#94a3b8",
                fontSize: "1.2rem",
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.8
              }}
            >
              Manage all platform modules with a modern
              microservices architecture powered by Spring Boot,
              Eureka Discovery and API Gateway.
            </Typography>

          </Box>

          {/* CARDS */}

          <Grid container spacing={5}>

            {services.map((service, index) => (

              <Grid item xs={12} md={4} key={index}>

                <Card
                  component={Link}
                  to={service.path}
                  sx={{

                    position: "relative",

                    overflow: "hidden",

                    height: 320,

                    borderRadius: 7,

                    textDecoration: "none",

                    background:
                      "linear-gradient(145deg,rgba(15,23,42,0.95),rgba(30,41,59,0.75))",

                    backdropFilter: "blur(25px)",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    transition: "0.45s ease",

                    boxShadow:
                      "0 10px 40px rgba(0,0,0,0.45)",

                    "&:hover": {

                      transform:
                        "translateY(-14px) scale(1.02)",

                      boxShadow:
                        "0 25px 70px rgba(59,130,246,0.25)",

                      border:
                        "1px solid rgba(96,165,250,0.25)"
                    }
                  }}
                >

                  {/* GLOW */}

                  <Box
                    sx={{
                      position: "absolute",
                      width: 220,
                      height: 220,
                      borderRadius: "50%",
                      background:
                        index === 0
                          ? "radial-gradient(circle,#2563eb55 0%,transparent 70%)"
                          : index === 1
                          ? "radial-gradient(circle,#06b6d455 0%,transparent 70%)"
                          : "radial-gradient(circle,#8b5cf655 0%,transparent 70%)",
                      top: -80,
                      right: -80,
                      filter: "blur(50px)"
                    }}
                  />

                  <CardContent
                    sx={{
                      p: 5,
                      position: "relative",
                      zIndex: 2,
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >

                    <Box>

                      <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                          mb: 3,
                          color: "white",
                          letterSpacing: "-1px"
                        }}
                      >
                        {service.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#cbd5e1",
                          lineHeight: 1.9,
                          fontSize: "1.05rem"
                        }}
                      >
                        {service.desc}
                      </Typography>

                    </Box>

                    <Button
                      variant="contained"
                      sx={{
                        mt: 4,
                        alignSelf: "flex-start",

                        px: 4,
                        py: 1.4,

                        borderRadius: 4,

                        fontWeight: "bold",

                        textTransform: "none",

                        background:
                          index === 0
                            ? "linear-gradient(90deg,#2563eb,#3b82f6)"
                            : index === 1
                            ? "linear-gradient(90deg,#0891b2,#06b6d4)"
                            : "linear-gradient(90deg,#7c3aed,#8b5cf6)",

                        boxShadow:
                          "0 10px 30px rgba(0,0,0,0.35)"
                      }}
                    >
                      Open Service
                    </Button>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid>

        </Container>

      </Box>

    </Box>
  );
}

export default Dashboard;