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

function Users() {

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
                sx={inputStyle}
              />

              <TextField
                fullWidth
                label="Email"
                sx={inputStyle}
              />

              <Button
                variant="contained"
                sx={buttonStyle}
              >
                Add User
              </Button>

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