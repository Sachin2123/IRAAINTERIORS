import React from "react";
import { Box, Container, Typography, IconButton, Divider } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#172d40",
        color: "white",
        padding: "30px 0",
        mt: 5,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Left Section - Branding */}
          <Box>
            <Typography variant="h5" fontWeight="bold">
              IRAA INTERIORS
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Your Dream Home Start Here!
            </Typography>
          </Box>

          {/* Center Section - Quick Links */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              mt: { xs: 3, md: 0 },
            }}
          >
            <Typography variant="body2" sx={{ cursor: "pointer" }}></Typography>
          </Box>

          {/* Right Section - Social Media */}
          <Box sx={{ mt: { xs: 3, md: 0 } }}>
            <Typography variant="body2">Follow Us:</Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <IconButton color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.2)", my: 3 }} />

        {/* Bottom Section */}
        <Box textAlign="center">
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} IRAA INTERIORS. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default footer;
