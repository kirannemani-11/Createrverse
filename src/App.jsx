import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AddCreator from "./pages/Addcreator";
import { Box } from "@mui/material";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import AllCreators from "./pages/Allcreators";

function App() {
  return (
    <Router>
      <Box
        sx={{
          padding: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add-creator" element={<AddCreator />} />
          <Route path="/view-creator/:id" element={<ViewCreator />} />
          <Route path="/edit-creator" element={<EditCreator />} />
          <Route path="/all-creators" element={<AllCreators />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
