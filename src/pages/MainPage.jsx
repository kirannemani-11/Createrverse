import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Grid } from "@mui/material";
import ActionAreaCard from "../components/card";
import { supabase } from "../client";

function MainPage() {
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState([]);

  const handleAddCreatorNavigation = () => {
    console.log(cardsData.length);
    navigate("/add-creator", {
      state: { size: cardsData.length + 1 },
    });
  };

  const handleShowAllCreators = () => {
    navigate("/all-creators");
  };

  async function fetchData() {
    const { data, error } = await supabase.from("creators").select();

    if (error) {
      console.error("Error fetching data:", error);
    } else {
      console.log("Fetched data:", data);
      setCardsData(data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const displayedCreators = cardsData.slice(0, 5);

  return (
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
      <Typography variant="h3" gutterBottom>
        Createrverse
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginBottom: 2,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddCreatorNavigation}
        >
          Add New Creator
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleShowAllCreators}
        >
          Show All Creators
        </Button>
      </Box>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        Creators
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {displayedCreators.length > 0 ? (
          <Grid container spacing={3} justifyContent="center">
            {displayedCreators.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <ActionAreaCard data={item} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body1">No data available</Typography>
        )}
      </Box>
    </Box>
  );
}

export default MainPage;
