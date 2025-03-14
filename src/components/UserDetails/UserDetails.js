import React from "react";
import { useState } from "react";
import { Paper, Typography, Box, Button } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Logo from "../../Logo/Favicon.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// Dining
import Dining1 from "../../Images/Dining1.jpeg";
import Dining2 from "../../Images/Dining2.jpeg";
import Dining3 from "../../Images/Dining3.jpeg";
import Dining4 from "../../Images/Dining4.jpeg";

// ClothShelf
import ClothShelf1 from "../../Images/ClothShelf.jpeg";

// Bedrooom
import Bed1 from "../../Images/Bed1.jpeg";
import Bed2 from "../../Images/Bed2.jpeg";
import Bed3 from "../../Images/Bed3.jpeg";
import Bed4 from "../../Images/Bed4.jpeg";
import Bed5 from "../../Images/Bed5.jpeg";
import Bed6 from "../../Images/Bed6.jpeg";
import Bed7 from "../../Images/Bed7.jpeg";
import Bed8 from "../../Images/Bed8.jpeg";
import Bed9 from "../../Images/Bed9.jpeg";
import Bed10 from "../../Images/Bed10.jpeg";
import Bed11 from "../../Images/Bed11.jpeg";

// Sofa
import Sofa from "../../Images/Sofa.jpeg";

// Pooja
import Pooja from "../../Images/Pooja.jpeg";

// Hall

import Hall1 from "../../Images/Hall1.jpeg";
import Hall2 from "../../Images/Hall2.jpeg";
import Hall3 from "../../Images/Hall3.jpeg";

// Kitchen
import Kit1 from "../../Images/Kitchen1.jpeg";
import Kit2 from "../../Images/Kictchen2.jpeg";
import Kit3 from "../../Images/Kitchen2.jpeg";

// Living
import Living1 from "../../Images/Living1.jpeg";
import Living2 from "../../Images/Living2.jpeg";

// Child
import Child1 from "../../Images/Child1.jpeg";
import Child2 from "../../Images/Child2.jpeg";

const filter = [
  {
    id: 1,
    name: "Modern Dining Set",
    category: "Dining",
    images: Dining1,
    description:
      "A sleek and modern dining table set perfect for family meals.",
  },
  {
    id: 2,
    name: "Luxury Sofa",
    category: "Living",
    images: Sofa,
    description: "A comfortable and stylish luxury sofa for your living room.",
  },
  {
    id: 3,
    name: "Elegant Bed",
    category: "Bedroom",
    images: Bed1,
    description:
      "A king-size bed with premium wooden finishing for a cozy sleep.",
  },
  {
    id: 4,
    name: "Elegant Bed",
    category: "Bedroom",
    images: Bed2,
    description:
      "A king-size bed with premium wooden finishing for a cozy sleep.",
  },
  {
    id: 5,
    name: "Elegant Bed",
    category: "Bedroom",
    images: Bed3,
    description: "A beautifully crafted bed with modern aesthetics.",
  },
  {
    id: 6,
    name: "Luxury Bedroom",
    category: "Bedroom",
    images: Bed4,
    description: "A premium bedroom setup with high-end furnishings.",
  },
  {
    id: 7,
    name: "Stylish Cloth Shelf",
    category: "Storage",
    images: ClothShelf1,
    description: "A modern cloth shelf to keep your wardrobe organized.",
  },
  {
    id: 8,
    name: "Pooja Mandir",
    category: "Pooja",
    images: Pooja,
    description: "A traditional wooden pooja mandir with intricate carvings.",
  },
  {
    id: 9,
    name: "Spacious Hall",
    category: "Hall",
    images: Hall1,
    description: "A well-designed hall space with modern decor elements.",
  },
  {
    id: 10,
    name: "Modern Hall",
    category: "Hall",
    images: Hall2,
    description: "An elegantly furnished hall for comfortable living.",
  },
  {
    id: 11,
    name: "Elegant Hall",
    category: "Hall",
    images: Hall3,
    description: "A grand hall space with stunning interiors.",
  },
  {
    id: 12,
    name: "Cozy Living Room",
    category: "Living",
    images: Living1,
    description: "A beautifully designed living room with a warm aesthetic.",
  },
  {
    id: 13,
    name: "Stylish Living Room",
    category: "Living",
    images: Living2,
    description: "A chic and comfortable living space with modern decor.",
  },
  {
    id: 14,
    name: "Modern Dining Setup",
    category: "Dining",
    images: Dining2,
    description:
      "A stylish dining setup with a glass table and comfortable chairs.",
  },
  {
    id: 15,
    name: "Elegant Dining Space",
    category: "Dining",
    images: Dining3,
    description: "A beautifully designed dining space for family gatherings.",
  },
  {
    id: 16,
    name: "Family Dining Table",
    category: "Dining",
    images: Dining4,
    description: "A spacious dining table suitable for large family meals.",
  },
  {
    id: 17,
    name: "Compact Kitchen",
    category: "Kitchen",
    images: Kit1,
    description:
      "A modern modular kitchen with ample storage and premium finish.",
  },
  {
    id: 18,
    name: "Stylish Kitchen",
    category: "Kitchen",
    images: Kit2,
    description: "A space-saving kitchen design with modern features.",
  },
  {
    id: 19,
    name: "Elegant Kitchen",
    category: "Kitchen",
    images: Kit3,
    description: "A well-organized kitchen with premium fittings.",
  },
  {
    id: 20,
    name: "Kids Play Area",
    category: "Child",
    images: Child1,
    description: "A safe and fun play area designed for kids.",
  },
  {
    id: 21,
    name: "Kids Bedroom",
    category: "Child",
    images: Child2,
    description: "A fun and colorful kids' bedroom setup.",
  },
  {
    id: 22,
    name: "Guest Room Setup",
    category: "Guest Room",
    images: Bed5,
    description: "A welcoming guest room with a cozy queen-size bed.",
  },
  {
    id: 23,
    name: "Elegant Bedroom",
    category: "Bedroom",
    images: Bed6,
    description: "A stylish bedroom design with contemporary elements.",
  },
  {
    id: 24,
    name: "Luxury Bedroom",
    category: "Bedroom",
    images: Bed7,
    description: "A spacious and elegant bedroom for relaxation.",
  },
  {
    id: 25,
    name: "Elegant Bedroom",
    category: "Bedroom",
    images: Bed8,
    description: "A cozy and well-furnished bedroom for comfort.",
  },
  {
    id: 26,
    name: "Luxury Bedroom",
    category: "Bedroom",
    images: Bed9,
    description: "A high-end bedroom with a sophisticated touch.",
  },
  {
    id: 27,
    name: "Elegant Bedroom",
    category: "Bedroom",
    images: Bed10,
    description: "A stylish and spacious bedroom with warm tones.",
  },
  {
    id: 28,
    name: "Premium Bedroom",
    category: "Bedroom",
    images: Bed11,
    description: "A luxurious bedroom setup with premium furniture.",
  },
];

const UserDetails = () => {
  const [filteredItems, setFilteredItems] = useState(filter);
  const [activeButton, setActiveButton] = useState(null);

  const FilterButtonClicked = (category) => {
    // console.log("category:- ", category);
    if (!category) {
      setFilteredItems(filter);
    } else {
      const newFilteredItems = filter.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setTimeout(() => {
        setFilteredItems(newFilteredItems);
      }, 0);
    }
  };

  const uniqueCategories = [...new Set(filter.map((item) => item.category))];

  const handleShare = async (images) => {
    // console.log(images);
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this image!",
          text: "Here's an image for you.",
          url: images,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported in this browser.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
        backgroundColor: "#F5EDE1",
      }}
    >
      {/* User Details and 1st Paper*/}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "80%", sm: "70%", md: "80%" },
          p: { xs: 5, md: 10 },
          borderRadius: 2,
          flexWrap: "wrap",
          gap: 3,
          mb: 5,
          mt: 5,
        }}
      >
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{ width: 278, height: 300, borderRadius: "5%" }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: "#b48255 !important" }}
          >
            IRAA INTERIORS
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Interior Contractor
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              alignItems: "center",
            }}
          >
            <LocationOnIcon sx={{ mr: 1 }} /> Mumbai, Maharashtra
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              sx={{
                px: 3,
                backgroundColor: "#172d40 !important",
                color: "white !important",
                "&:hover": { color: "goldenrod !important" },
              }}
              startIcon={<CallIcon />}
            >
              Contact
            </Button>
            <Button
              onClick={() => handleShare("https://iraainteriors.netlify.app/")}
              variant="contained"
              sx={{
                px: 3,
                backgroundColor: "#172d40 !important",
                color: "white !important",
                "&:hover": { color: "goldenrod !important" },
              }}
              startIcon={<ShareIcon />}
            >
              Share Profile
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* Filter and 2nd Paper*/}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "90%", sm: "70%", md: "80%" },
          p: { xs: 5, md: 10 },
          borderRadius: 2,
          flexWrap: "wrap",
          overflowX: "auto",
          mb: 5,
          gap: 3,
          // backgroundColor: "#2E2E2E",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            marginLeft: "5px",
            gap: 2,
            overflowX: "auto", // Ensures horizontal scrolling
            whiteSpace: "nowrap",
            paddingX: 2,
            paddingLeft: "0px", // Ensures first button is visible
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            "&::-webkit-scrollbar": { display: "none" }, // Hides scrollbar in Chrome/Safari
          }}
        >
          <Button
            variant="outlined"
            sx={{
              // color: "#b48255",
              padding: 1,
              flexShrink: 0,
              minWidth: "130px",
              borderColor: "grey !important",
              borderRadius: "10px",
              fontWeight: "bold",
              "&:hover": {
                borderColor: "darkgrey",
                // backgroundColor: "#f9f9f9",
              },
              backgroundColor:
                activeButton === "All" ? "#b48255" : "transparent",
              color: activeButton === "All" ? "white" : "#b48255",
            }}
            onClick={() => {
              FilterButtonClicked(null);
              setActiveButton("All");
            }}
          >
            All
          </Button>
          {uniqueCategories.map((item, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{
                // color: "#b48255",
                padding: 1,
                flexShrink: 0,
                minWidth: "130px",
                borderColor: "grey !important",
                borderRadius: "10px",
                fontWeight: "bold",
                "&:hover": {
                  borderColor: "darkgrey",
                  // backgroundColor: "#f9f9f9",
                },
                backgroundColor:
                  activeButton === item ? "#b48255" : "transparent",
                color: activeButton === item ? "white" : "#b48255",
              }}
              onClick={() => {
                FilterButtonClicked(item);
                setActiveButton(item);
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Paper>
      {/* Results and 3rd Paper*/}
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          width: { xs: "90%", sm: "70%", md: "80%" },
          p: { xs: 5, md: 10 },
          borderRadius: 2,
          flexWrap: "wrap",
          gap: 5,
          mb: 5,
        }}
      >
        {filteredItems.map((item) => (
          <Card key={item.id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="Images"
              height="300"
              image={item.images}
              sx={{
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ mt: 2 }}
              >
                {item.name}
              </Typography>
              {/* <Typography gutterBottom variant="h5" component="div">
                {item.category}
              </Typography> */}
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {item.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  mb: 1,
                  ml: 1,
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#172d40 !important",
                    color: "white !important",
                    "&:hover": {
                      color: "goldenrod !important",
                    },
                  }}
                  onClick={() => window.open(item.images, "_blank")}
                >
                  View
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#172d40 !important",
                    color: "white !important",
                    "&:hover": { color: "goldenrod !important" },
                  }}
                  onClick={() => handleShare(item.images)}
                >
                  Share
                </Button>
              </Box>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </Box>
  );
};

export default UserDetails;
