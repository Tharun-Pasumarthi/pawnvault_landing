import React from "react";
import { Box, Container, Typography } from "@mui/material";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        backgroundColor: "var(--pv-navy)",
        color: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © {year} Pawn Vault · Developed by Ramesh Tech Solutions
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
