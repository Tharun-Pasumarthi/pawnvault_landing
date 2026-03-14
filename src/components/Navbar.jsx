import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Download", href: "#download" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(11, 31, 42, 0.96)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(10px)",
        color: "#ffffff",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1.5 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Pawn Vault
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component="a"
                href={item.href}
                color="inherit"
                sx={{ fontWeight: 600, color: "#ffffff" }}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="secondary"
              component="a"
              href="#download"
              sx={{ ml: 1 }}
            >
              Get the App
            </Button>
          </Box>
          <IconButton
            onClick={handleToggle}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
            aria-label="Open navigation"
          >
            <MenuIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={open} onClose={handleToggle}>
        <Box sx={{ width: 260, px: 2, py: 3 }} role="presentation">
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, mb: 2, letterSpacing: "0.08em" }}
          >
            Pawn Vault
          </Typography>
          <List sx={{ display: "grid", gap: 1 }}>
            {navItems.map((item) => (
              <ListItemButton
                key={item.label}
                component="a"
                href={item.href}
                onClick={handleToggle}
                sx={{ borderRadius: 2 }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
            <ListItemButton
              component="a"
              href="/pawnvault.apk"
              onClick={handleToggle}
              sx={{ borderRadius: 2 }}
            >
              <ListItemText primary="Download APK" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
