import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, IconButton, Button } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { supabase } from "../client";

function ViewCreator() {
  const location = useLocation();
  const { creator } = location.state || {};
  const navigate = useNavigate();

  const deleteCreator = async (id) => {
    const { data, error } = await supabase
      .from("creators")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("error", error);
    } else {
      console.log("data", data);
      window.alert("Creator Deleted Successfully");
      navigate("/");
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      {creator ? (
        <>
          <Typography variant="h4" gutterBottom>
            {creator.name}
          </Typography>
          <Box
            sx={{
              width: "100%",
              maxWidth: 800,
              margin: "0 auto",
              marginBottom: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={creator.imageURL}
              alt={creator.name}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "400px",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography variant="body1" paragraph>
            {creator.description}
          </Typography>

          {creator.url && (
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
            >
              <IconButton
                color="primary"
                onClick={() => window.open(creator.url, "_blank")}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => deleteCreator(creator.id)}
            >
              Delete Creator
            </Button>
          </Box>
        </>
      ) : (
        <Typography variant="body1">No creator data available.</Typography>
      )}
    </Box>
  );
}

export default ViewCreator;
