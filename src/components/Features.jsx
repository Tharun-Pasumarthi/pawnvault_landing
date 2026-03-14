import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";

const features = [
  {
    title: "Customer Management",
    description: "Store and manage customer details securely.",
    icon: PeopleIcon,
  },
  {
    title: "Transaction Tracking",
    description: "Track pawn loans, interest, and repayment dates.",
    icon: MonetizationOnIcon,
  },
  {
    title: "Item Records",
    description: "Maintain digital records of pawned items.",
    icon: StorageIcon,
  },
  {
    title: "Secure Data Storage",
    description: "Organize and protect pawn shop data.",
    icon: SecurityIcon,
  },
];

function Features() {
  return (
    <Box component="section" id="features" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{ textAlign: "center", mb: 1, fontSize: { xs: 32, md: 40 } }}
        >
          Built for everyday pawn operations
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
          Everything your team needs to manage customer relationships, inventory,
          and repayments with speed and accuracy.
        </Typography>
        <Grid container spacing={3}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={feature.title}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    border: "1px solid rgba(11, 31, 42, 0.08)",
                    backgroundColor: "var(--pv-card)",
                    boxShadow: "0 12px 30px rgba(11, 31, 42, 0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    animation: `fadeUp 700ms ease ${index * 120}ms both`,
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 18px 40px rgba(11, 31, 42, 0.12)",
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 2.5,
                        background:
                          "linear-gradient(135deg, rgba(29, 181, 165, 0.2), rgba(29, 181, 165, 0.05))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 2,
                      }}
                    >
                      <Icon sx={{ fontSize: 28, color: "var(--pv-teal)" }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Features;
