import React from "react";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";

function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        color: "#ffffff",
        backgroundImage:
          "linear-gradient(135deg, var(--pv-navy), var(--pv-deep) 55%, #1f5d63)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -140,
          right: -140,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.12)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -160,
          left: -160,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "rgba(29, 181, 165, 0.2)",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
          sx={{
            py: { xs: 10, md: 14 },
            animation: "fadeIn 900ms ease both",
          }}
        >
          <Chip
            label="Android App"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.15)",
              color: "#ffffff",
              fontWeight: 600,
            }}
          />
          <Typography variant="h2" sx={{ fontSize: { xs: 40, md: 64 } }}>
            Pawn Vault
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Smart Digital Management for Pawn Shops
          </Typography>
          <Typography
            variant="body1"
            sx={{ maxWidth: 640, opacity: 0.85, fontSize: 18 }}
          >
            Centralize customer records, transactions, and inventory in one secure
            mobile workspace. Pawn Vault keeps your shop organized, compliant, and
            ready for faster service.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<AndroidIcon />}
            component="a"
            href="/pawnvault2.apk"
            download
            sx={{ px: 4, py: 1.4 }}
          >
            Download Android App
          </Button>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mt: 3, width: "100%", justifyContent: "center" }}
          >
            {[
              "Instant customer lookup",
              "Automated interest tracking",
              "Encrypted data storage",
            ].map((text) => (
              <Box
                key={text}
                sx={{
                  px: 3,
                  py: 1.6,
                  borderRadius: 3,
                  background: "rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(6px)",
                  fontWeight: 600,
                }}
              >
                {text}
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HeroSection;
