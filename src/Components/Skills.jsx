import { Box, Chip, Stack, Tooltip, Typography } from "@mui/material";
import { StyledStack } from "./styles";
import direction from "./pngtree-vector-hand-icon-png-image_332917.jpg";
import React from "react";

export const Skills = () => {
  const skillArray = ["Java", "C"];
  const webSkilArray = ["HTML5", "CSS3", "JavaScript", "Redux", "TypeScript"];
  const reactLibrarys = [
    "React Js",
    "react-redux",
    "react-table",
    "Formik",
    "MUI",
    "Apex charts",
    "Styled-Components",
    "Tailwind CSS",
    "SCSS",
  ];
  const backend = ["Node Js", "Express Js", "MongoDB", "MySQL"];
  const tools = ["GitHub", "Postman", "VSCode", "MongoDB Atlas"];
  return (
    <Box>
      <Typography variant="h3" color="black" m="30px">
        Skills
      </Typography>
      <StyledStack alignItems="start">
        {/* <img
          src={direction}
          width="300px"
          style={{ border: "none", backgroundColor: "white" }}
        ></img> */}
        <Box
          sx={{
            backgroundColor: "#aea580",
            position: "absolute",
            right: "95rem",
            bottom: "40rem",
            width: "200px",
            height: "200px",
            borderRadius: "40%/30%",
          }}
        ></Box>
        <Stack ml="8rem" spacing={4} textAlign="left">
          <Box>
            <Typography variant="h4" mt={5}>
              Programming Languages
            </Typography>
            {skillArray.map((item) => {
              return (
                <Chip
                  variant="outlined"
                  label={item}
                  size="large"
                  sx={{
                    m: "10px",
                    p: "10px 20px",
                    border: "2px solid #aea580",
                    fontSize: "16px",
                  }}
                ></Chip>
              );
            })}
          </Box>
          <Box>
            <Typography variant="h4">Web Technologies</Typography>
            {webSkilArray.map((item) => {
              return (
                <Chip
                  variant="outlined"
                  label={item}
                  size="large"
                  sx={{
                    m: "10px",
                    p: "10px 20px",
                    border: "2px solid #aea580",
                    fontSize: "16px",
                  }}
                ></Chip>
              );
            })}
          </Box>
          <Box>
            <Typography variant="h4">React and Libraries</Typography>
            {reactLibrarys.map((item) => {
              return (
                <Chip
                  variant="outlined"
                  label={item}
                  size="large"
                  sx={{
                    m: "10px",
                    p: "10px 10px",
                    border: "2px solid #aea580",
                    fontSize: "16px",
                  }}
                ></Chip>
              );
            })}
          </Box>
          <Box>
            <Typography variant="h4">BackEnd</Typography>
            {backend.map((item) => {
              return (
                <Chip
                  variant="outlined"
                  label={item}
                  size="large"
                  sx={{
                    m: "10px",
                    p: "10px 20px",
                    border: "2px solid #aea580",
                    fontSize: "16px",
                  }}
                ></Chip>
              );
            })}
          </Box>
          <Box>
            <Typography variant="h4">Tools</Typography>
            {tools.map((item) => {
              return (
                <Chip
                  variant="outlined"
                  label={item}
                  size="large"
                  sx={{
                    m: "10px",
                    p: "10px 20px",
                    border: "2px solid #aea580",
                    fontSize: "16px",
                  }}
                ></Chip>
              );
            })}
          </Box>
        </Stack>
      </StyledStack>
    </Box>
  );
};
