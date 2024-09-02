import {
  Stack,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  TextField,
  Button,
  ButtonGroup,
} from "@mui/material";
import React, { useEffect, useReducer } from "react";
import {
  StyledStack,
  StyledBox,
  EmptyBox,
  StyledButton,
  StyledTextBox,
  StyledTextField,
  HiredButton,
} from "./styles";

import { ArrowBack } from "@mui/icons-material";
import {
  SkilledImg,
  StyledHr,
  StyledImage,
  StyledSpan,
} from "./StyledComponents";
import satya from "./satyaimage.jpg";
import skill from "./AllSkills.png";
import "./style.css";
import { useNavigate } from "react-router";
const initialState = {
  home: false,
  about: false,
  education: false,
  contact: false,
  skills: false,
  projects: false,
  certifications: false,
};
var reducer = (state, action) => {
  switch (action.type) {
    case "Home":
      return { ...state, home: true };
    case "About me":
      return { ...state, about: true };
    case "Education":
      return { ...state, education: true };
    case "Contact":
      return { ...state, contact: true };
    case "skills":
      return { ...state, skills: true };
    case "projects":
      return { ...state, projects: true };
    case "certifications":
      return { ...state, certifications: true };
    default:
      return initialState;
  }
};
export const Home = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    if (state.home) {
      navigate("/");
    } else if (state.about) {
      navigate("/about");
    } else if (state.contact) {
      navigate("/contact");
    } else if (state.skills) {
      navigate("/skills");
    } else if (state.projects) {
      navigate("/projects");
    } else if (state.education) {
      navigate("/education");
    } else if (state.certifications) {
      navigate("/certifications");
    }
  }, [state, navigate]);

  const arr = ["Home", "About me", "Education", "Contact"];
  return (
    <Box>
      {" "}
      <div style={{ marginBottom: "50px" }}>
        <h1 style={{ color: "black" }}>Satya</h1>
        <p>Personal Portfolio</p>
      </div>
      <StyledStack direction="row">
        <StyledBox>
          {/* <Typography variant="body1">Home</Typography> */}

          <List>
            {arr.map((item) => (
              <ListItem key={item} sx={{ pt: "0px", pb: "0px" }}>
                {item === "Home" && <StyledHr></StyledHr>}
                <ListItemButton
                  onClick={() => dispatch({ type: item })}
                  sx={{ textTransform: "uppercase" }}
                >
                  <ListItemText>{item}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <EmptyBox></EmptyBox>
          <SkilledImg src={skill} alt="Skills"></SkilledImg>
        </StyledBox>
        <StyledBox display="flex">
          <StyledTextBox>
            <Typography
              variant="h1"
              color="black"
              sx={{ textAlign: "left", margin: "0", padding: "0" }}
            >
              H<span className="highlight-dot">i</span>
              <span className="highlight2-dot">!</span> <br />I am <br />
              Satya<span className="highlight2-dot">.</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "left", margin: "0", padding: "0" }}
            >
              A passionate front-end developer with a strong focus on creating
              dynamic and responsive web applications using React. Although I
              don't have professional experience yet, I have dedicated myself to
              mastering React and its libraries through various personal
              projects and continuous learning.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ marginTop: "1rem" }}>
              <StyledTextField
                value="srisatyamallula@gmail.com"
                aria-readonly
                variant="outlined"
              />
              <HiredButton
                variant="contained"
                href="mailto:srisatyamallula@gmail.com"
              >
                Hire Me
              </HiredButton>
            </Stack>
            <Box sx={{ marginTop: "1rem", color: "#b7a352" }}>
              <ButtonGroup variant="none">
                <StyledButton>Experiance</StyledButton>
                <StyledButton onClick={() => dispatch({ type: "skills" })}>
                  <StyledSpan>.</StyledSpan>
                  Skills
                </StyledButton>
                <StyledButton onClick={() => dispatch({ type: "projects" })}>
                  <StyledSpan>.</StyledSpan>
                  Projects
                </StyledButton>
                <StyledButton
                  onClick={() => dispatch({ type: "certifications" })}
                >
                  <StyledSpan>.</StyledSpan>
                  Certifications
                </StyledButton>
              </ButtonGroup>
            </Box>
          </StyledTextBox>
          <Box
            sx={{
              position: "relative",
              bottom: "7rem",
            }}
          >
            <StyledImage src={satya} alt="satya"></StyledImage>
          </Box>
        </StyledBox>
      </StyledStack>
    </Box>
  );
};
