import {
  Box,
  Typography
} from "@mui/material";

function Footer() {

  return (

    <Box
      sx={{
        py: 3,
        textAlign: "center",
        borderTop:
          "1px solid rgba(255,255,255,0.08)",
        background:
          "rgba(255,255,255,0.02)"
      }}
    >

      <Typography
        sx={{
          color: "#94a3b8"
        }}
      >
        Event Platform Microservices © 2026
      </Typography>

    </Box>

  );
}

export default Footer;