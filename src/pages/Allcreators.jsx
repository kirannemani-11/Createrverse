import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ActionAreaCard from "../components/card";
import { supabase } from "../client";

function AllCreators() {
  const [cardsData, setCardsData] = useState([]);

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
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        All Creators
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {cardsData.length > 0 ? (
          <Grid container spacing={3} justifyContent="center">
            {cardsData.map((item) => (
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

export default AllCreators;
