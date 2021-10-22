import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import {
  GitHub,
  Instagram,
  LinkedIn,
  MenuBook,
  SupervisedUserCircle,
} from "@mui/icons-material";
import logo from "../assets/GDSCLogo.png";

const footer = () => {
  return (
    <Box
      width={"100%"}
      px={{ xs: 4, sm: 3, lg: 2 }}
      style={{
        color: "#eee",
        backgroundColor: "#1976D2",
        padding: "1rem",
        textAlign: "center"
      }}
    >
      <Card>
            <CardContent>
              <img src={logo} alt="logo" style={{ width: "25%"}} />
            </CardContent>
      </Card>
      
    </Box>
  );
};

export default footer;
