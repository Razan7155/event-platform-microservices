import {
  Box,
  CircularProgress
} from "@mui/material";

function Loader() {

  return (

    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "300px"
      }}
    >

      <CircularProgress size={70} />

    </Box>

  );
}

export default Loader;