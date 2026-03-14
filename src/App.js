import React from "react";
import { Box, GlobalStyles } from "@mui/material";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Screenshots from "./components/Screenshots";
import DownloadSection from "./components/DownloadSection";
import Footer from "./components/Footer";

const globalStyles = {
  ":root": {
    "--pv-navy": "#0b1f2a",
    "--pv-deep": "#102e3a",
    "--pv-teal": "#1db5a5",
    "--pv-sand": "#f7f5f0",
    "--pv-card": "#ffffff",
    "--pv-ink": "#1d2b34",
  },
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    margin: 0,
    backgroundColor: "var(--pv-sand)",
  },
  "*": {
    boxSizing: "border-box",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "@keyframes fadeUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(16px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
};

function App() {
  return (
    <Box sx={{ bgcolor: "var(--pv-sand)", color: "var(--pv-ink)" }}>
      <GlobalStyles styles={globalStyles} />
      <Navbar />
      <Box component="main">
        <HeroSection />
        <Features />
        <Screenshots />
        <DownloadSection />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
