import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Events from "./pages/Events";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {

  return (

    <Router>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg,#020617,#0a1633)"
        }}
      >

        <Navbar />

        <Box
          sx={{
            flex: 1,
            pt: "90px"
          }}
        >

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/users"
              element={<Users />}
            />

            <Route
              path="/events"
              element={<Events />}
            />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

          </Routes>

        </Box>

        <Footer />

      </Box>

    </Router>
  );
}

export default App;