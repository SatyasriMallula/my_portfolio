import { Grid, Box, Typography, Button } from "@mui/material";
import React from "react";
import { ProjectsMainBox } from "./styles";
import { Description } from "@mui/icons-material";

export const Projects = () => {
  let projectsArray = [
    {
      name: "Optical Character Recognition (OCR) using CNN and RNN for Pytesseract",
      Technologies: "Python, CNN, PyTesseract, Machine Learning.",
      Description: [
        "Developed a machine learning-based OCR system using CNN and PyTesseract for accurate conversion of scanned images to machine-encoded text.",
        "Collaborated in a team of 4 members to achieve high accuracy rates in text recognition.",
        " Implemented user interface design and ensured seamless integration with backend algorithms.",
      ],
    },
    {
      name: "E-commerce Website",
      Technologies: "HTML, CSS, JavaScript, and Bootstrap.",
      Description: [
        " Designed and developed an E-Commerce platform using HTML, CSS, JavaScript, and Bootstrap.",
        " Created responsive and user-friendly interfaces to enhance customer shopping experience.",
        " Implemented backend functionalities to support shopping transactions and user accounts.",
      ],
    },
    {
      name: "Store Management System Web App",
      Technologies: "HTML, CSS, JavaScript, and React JS",
      Description: [
        "Developed a comprehensive web app for managing inventory, orders, and customer interactions for a pharmacy.",
        "Utilized HTML, CSS, JavaScript, and React JS to build intuitive user interfaces and dynamic data handling features.",
        " Ensured seamless integration of frontend and backend components to optimize operational efficiency.",
      ],
    },
    {
      name: "Game Rental App",
      Technologies: "Node Js, Express Js, MongoDB ",
      Description: [
        "Designed and developed a Node.js and Express JS-based application for renting gaming consoles, controllers, and game discs on a subscription basis.",
        "Integrated MongoDB for efficient data management and retrieval.",
        " Implemented secure user authentication and payment processing features to enhance user experience and data security.",
      ],
    },
    {
      name: "Some Of Mini Projects",
      mini: "mini",
      Description: [
        "Movies App",
        "Calculator",
        "Music App",
        "Portfolio",
        "Quiz App",
        "Weather Report",
        "......",
      ],
    },
  ];
  return (
    <Box>
      <Typography variant="h2" p={3} color="black">
        Projects
      </Typography>
      <Grid container>
        {projectsArray.map((item) => {
          return (
            <Grid item lg={4} mt={5}>
              <ProjectsMainBox>
                <Typography variant="h5" color="black" pt={4}>
                  {item.name}
                </Typography>
                <Box>
                  {!item.mini && (
                    <Typography variant="body1" my={1}>
                      <span style={{ color: "#e5be23" }}>Technologies</span> :{" "}
                      {item.Technologies}
                    </Typography>
                  )}
                  {!item.mini ? (
                    <Typography variant="subtitle1" p={0} mt={1} mb={0}>
                      <span style={{ color: "#e5be23" }}> Description :</span>
                    </Typography>
                  ) : (
                    <Typography variant="subtitle1" p={0} mt={1} mb={0}>
                      <span style={{ color: "#e5be23" }}> Details :</span>
                    </Typography>
                  )}
                  <ul style={{ margin: "0px" }}>
                    {item.Description.map((points) => {
                      return <li>{points}</li>;
                    })}
                  </ul>
                  {item.mini && (
                    <Button
                      variant="contained"
                      sx={{
                        mr: 5,
                        float: "right",
                        backgroundColor: "#aea580",
                        "&:hover": { backgroundColor: "#aea580" },
                      }}
                    >
                      See details
                    </Button>
                  )}
                </Box>
              </ProjectsMainBox>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
