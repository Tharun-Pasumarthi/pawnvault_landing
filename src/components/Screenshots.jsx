import React from "react";
import { Box, Card, CardMedia, Container, Grid, Typography } from "@mui/material";

const screenshots = [
  { src: "/screenshots/login.png", title: "Login Screen" },
  { src: "/screenshots/dashboard.png", title: "Dashboard" },
  { src: "/screenshots/transactions.png", title: "Transactions" },
  { src: "/screenshots/AddItem.png", title: "Add New Pledge" },
];

function Screenshots() {
  return (
    <Box
      component="section"
      id="screenshots"
      sx={{
        py: { xs: 8, md: 10 },
        background:
          "linear-gradient(180deg, rgba(29, 181, 165, 0.06), rgba(247, 245, 240, 0))",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 1, fontSize: { xs: 32, md: 40 } }}
        >
          See Pawn Vault in action
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 5,
            color: "text.secondary",
            maxWidth: 720,
            mx: "auto",
          }}
        >
          A clean, intuitive interface designed for fast in-store workflows.
        </Typography>
        <Grid container spacing={3}>
          {screenshots.map((shot, index) => (
            <Grid item xs={12} sm={6} md={3} key={shot.title}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  border: "1px solid rgba(11, 31, 42, 0.08)",
                  overflow: "hidden",
                  boxShadow: "0 14px 30px rgba(11, 31, 42, 0.08)",
                  animation: `fadeUp 700ms ease ${index * 140}ms both`,
                }}
              >
                <CardMedia
                  component="img"
                  image={shot.src}
                  alt={shot.title}
                  sx={{
                    width: "100%",
                    aspectRatio: "9 / 16",
                    objectFit: "contain",
                    backgroundColor: "rgba(11, 31, 42, 0.06)",
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Screenshots;
