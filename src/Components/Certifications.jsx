import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Link,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { OpenInNew } from "@mui/icons-material";

const certificationsArray = [
  {
    name: "React Certification",
    organization: "Edyoda Digital University",
    url: "https://edyodalms.s3.amazonaws.com/files/certificates/Satyasri_Mallula_achivement_ReactJS_Certification_6694_Qr_code_.png",
  },
  {
    name: "Web Development Fundamentals",
    organization: "Edyoda Digital University",
    url: "https://edyodalms.s3.amazonaws.com/files/certificates/Satyasri_mallula_achivement_Web_Dev_Fundamentals_Certification_5622.png",
  },
  {
    name: "Node.js, Express, MongoDB Certification",
    organization: "Edyoda Digital University",
    url: "https://edyodalms.s3.amazonaws.com/files/certificates/Satyasri_Mallula_achivement_Node_Express_Mongo_Certification_9351_Qr_code_.png",
  },
  {
    name: "Full Stack Development",
    organization: "Edyoda Digital University",
    url: "https://edyodalms.s3.amazonaws.com/files/certificates/Satyasri_Mallula_achivement_Node_Express_Mongo_Certification_9351_Qr_code_.png",
  },
  {
    name: "React Basics",
    organization: "HackerRank",
    url: "https://www.hackerrank.com/certificates/407d51c85037",
  },
  {
    name: "JavaScript Basic",
    organization: "HackerRank",
    url: "https://www.hackerrank.com/certificates/8f193ff14812",
  },
  {
    name: "JavaScript Intermediate",
    organization: "HackerRank",
    url: "https://www.hackerrank.com/certificates/5008e629ed3b",
  },
  {
    name: "Java Basic",
    organization: "HackerRank",
    url: "https://www.hackerrank.com/certificates/b2a145c04ce4",
  },
  {
    name: "CSS Basic",
    organization: "HackerRank",
    url: "https://www.hackerrank.com/certificates/3b6cc429af03",
  },
];

export const Certifications = () => {
  return (
    <Box>
      <Typography variant="h2" p={3} color="black">
        Certifications
      </Typography>
      <Box sx={{ m: "0px 10rem" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <List>
              {certificationsArray.map((cert, index) => (
                <ListItem
                  key={index}
                  sx={{
                    backgroundColor: "#f9f9f9",
                    margin: "10px 0",
                    padding: "15px",
                    borderRadius: "4px",
                    boxShadow: "0px 0px 2px 0px olive",
                    transform: "scaleZ(3.5)",
                    transition: "transform .35s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)", // Example transform property for hover effect
                      boxShadow: "3px 3px 6px 2px #aea580", // Adding some more changes for hover effect
                    },
                  }}
                >
                  <ListItemText
                    primary={cert.name}
                    secondary={cert.organization}
                    primaryTypographyProps={{ variant: "h6", color: "black" }}
                    secondaryTypographyProps={{
                      variant: "body2",
                      color: "#666",
                    }}
                  />
                  <ListItemSecondaryAction>
                    {cert.url && (
                      <IconButton
                        edge="end"
                        component={Link}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="inherit"
                        aria-label="open"
                      >
                        <OpenInNew />
                      </IconButton>
                    )}
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
