import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

function DownloadSection() {
  return (
    <Box component="section" id="download" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Stack spacing={2}>
              <Typography variant="h3" sx={{ fontSize: { xs: 32, md: 40 } }}>
                Download Pawn Vault
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Empower your team with a modern Android solution for managing
                customer profiles, collateral, and repayments.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<FileDownloadOutlinedIcon />}
                component="a"
                href="/pawnvault2.apk"
                download
                sx={{ alignSelf: "flex-start", px: 4, py: 1.4 }}
              >
                Download APK
              </Button>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Version
                  </Typography>
                  <Typography variant="body1">v1.0</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Size
                  </Typography>
                  <Typography variant="body1">15 MB</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Last Updated
                  </Typography>
                  <Typography variant="body1">March 2026</Typography>
                </Box>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                Enable Install from Unknown Sources in Android settings to
                install the app.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
//Replaced the updated version apk
export default DownloadSection;
