import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EditIcon from "@mui/icons-material/Edit";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ActionAreaCard({ data }) {
  const navigate = useNavigate();

  const handleYouTubeClick = (e) => {
    e.stopPropagation();
    window.open(data.url, "_blank");
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    navigate("/edit-creator", {
      state: { creator: data },
    });
  };

  const handleCardClick = (id) => {
    navigate(`/view-creator/${id}`, {
      state: { creator: data },
    });
  };

  return (
    <Card sx={{ cursor: "pointer" }}>
      <CardActionArea onClick={() => handleCardClick(data.id)}>
        <CardMedia
          component="img"
          height={250}
          image={data.imageURL}
          alt={data.name}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {data.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {data.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              marginTop: 2,
            }}
          >
            <IconButton onClick={handleYouTubeClick}>
              <YouTubeIcon />
            </IconButton>
            <IconButton onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ActionAreaCard;
