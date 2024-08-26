import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

function EditCreator() {
  const location = useLocation();
  const navigate = useNavigate();
  const { creator } = location.state || {};
  const [name, setName] = useState(creator?.name || "");
  const [url, setUrl] = useState(creator?.url || "");
  const [description, setDescription] = useState(creator?.description || "");
  const [imageURL, setImageURL] = useState(creator?.imageURL || "");
  const [id, setid] = useState(creator?.id || "");

  async function updateData(id, url, imageURL, description, name) {
    const { data, error } = await supabase
      .from("creators")
      .update({
        name: name,
        url: url,
        imageURL: imageURL,
        description: description,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating data:", error);
    } else {
      navigate("/");
    }
  }

  const handleUpdate = () => {
    console.log("Update Creator", id);
    updateData(id, url, imageURL, description, name);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Edit Creator
      </Typography>
      <Box
        component="form"
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
        />
        <TextField
          label="URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
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
        />
        <TextField
          label="Image URL"
          variant="outlined"
          fullWidth
          margin="normal"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          required
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdate}
          sx={{ marginTop: 2 }}
        >
          Update Creator
        </Button>
      </Box>
    </Box>
  );
}

export default EditCreator;
