import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

function AddCreator() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const size = location.state?.size;
  async function handleSubmit(event) {
    event.preventDefault();

    const { error } = await supabase.from("creators").insert({
      id: size,
      name: name,
      url: url,
      description: description,
      imageURL: imageURL,
    });

    if (error) {
      console.error("Error adding creator:", error);
    } else {
      navigate("/");
    }
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Add New Creator
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: 600,
          backgroundColor: "#ffffff",
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          sx={{ backgroundColor: "#fafafa" }}
        />
        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          sx={{ backgroundColor: "#fafafa" }}
        />
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          sx={{ backgroundColor: "#fafafa" }}
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
          sx={{ backgroundColor: "#fafafa" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default AddCreator;
