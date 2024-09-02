import { Box, Typography } from "@mui/material";
import { StyledStack } from "./styles";
import direction from "./pngtree-vector-hand-icon-png-image_332917.jpg";
import React from "react";

export const AboutMe = () => {
  return (
    <Box>
      <Typography variant="h3" color="black" m="30px">
        About Me
      </Typography>
      <StyledStack alignItems="center" direction="row">
        {/* <img
          src={direction}
          width="300px"
          style={{ border: "none", backgroundColor: "white" }}
        ></img> */}
        <Box
          sx={{
            backgroundColor: "#aea580",
            position: "absolute",
            right: "92rem",
            bottom: "35rem",
            width: "300px",
            height: "300px",
            borderRadius: "40%/30%",
          }}
        ></Box>
        <Box m="0" p="0" textAlign="left" width="60%" ml="250px">
          <Typography variant="subtitle1" sx={{ m: "80px 30px 30px 30px" }}>
            Hello! I’m Satyasri Mallula, a passionate developer from Tadimalla,
            East Godavari District, Andhra Pradesh. I completed my B.Tech in
            Computer Science and Engineering from Giet Engineering College,
            Rajamahendravaram.
          </Typography>
          <Typography variant="subtitle1" sx={{ m: "30px" }}>
            I have a strong foundation in various programming languages and
            tools including Java, HTML, CSS, JavaScript, TypeScript, React,
            Redux, MongoDB, SQL, Node.js, and Express. I’m also proficient in
            React libraries like Axios, Router, Apex Charts, MUI, Styled
            Components, Tailwind CSS, and Sass.
          </Typography>
          <Typography variant="subtitle1" sx={{ m: "30px" }}>
            While I don’t have professional experience yet, I’ve completed a
            MERN stack course and possess deep knowledge in frontend
            development. I’m enthusiastic about creating innovative solutions
            and have hands-on experience with personal projects in React.
          </Typography>
          <Typography variant="subtitle1" sx={{ m: "30px" }}>
            I hold several certifications, including React Developer, Web
            Developer, Node.js, Express, MongoDB, and JavaScript. My career goal
            is to become a full-stack developer while achieving financial
            independence. In my free time, I enjoy creating React applications,
            cooking, playing puzzle games on my mobile, and spending quality
            time with my family.
          </Typography>
        </Box>
      </StyledStack>
    </Box>
  );
};
