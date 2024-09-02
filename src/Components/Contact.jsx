import React from "react";
import { Typography, Box, Stack, Button, TextField } from "@mui/material";
import { HiredButton, StyledStack } from "./styles";

export const Contact = () => {
  const handleSendEmail = () => {
    window.location.href = `mailto:srisatyamallula@gmail.com?subject=Contact from Portfolio&body=Message Body Here`;
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginBottom: 2, color: "black" }}
      >
        Contact Me
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center", marginBottom: 4 }}>
        Thank you for visiting my portfolio! If you have any questions, project
        inquiries, or just want to connect, feel free to reach out using the
        information below.
      </Typography>
      <StyledStack direction="row">
        <Box textAlign="start" m="40px" p="0" width="50%">
          <Box sx={{ margin: 8 }}>
            <Typography variant="h4">Email:</Typography>
            <Typography variant="body1">
              I’m always happy to discuss new opportunities or answer questions.
              You can email me at{" "}
              <a href="mailto:srisatyamallula@gmail.com">
                srisatyamallula@gmail.com
              </a>
              . I will respond as soon as possible.
            </Typography>
          </Box>

          <Box sx={{ margin: 8 }}>
            <Typography variant="h4">Connect with Me:</Typography>
            <Typography variant="body1">
              Stay updated with my latest work and projects by following me on
              social media:
            </Typography>
            <Stack
              direction="row"
              spacing={4}
              sx={{ margin: 4, justifyContent: "center", color: "white" }}
            >
              <HiredButton
                variant="outlined"
                href="https://linkedin.com/in/satyasri-mallula-955486225"
                target="_blank"
              >
                LinkedIn
              </HiredButton>
              <HiredButton
                variant="outlined"
                href="https://twitter.com/yourprofile"
                target="_blank"
              >
                Twitter
              </HiredButton>
              <HiredButton
                variant="outlined"
                href="https://github.com/satyasrimallula"
                target="_blank"
              >
                GitHub
              </HiredButton>
            </Stack>
          </Box>

          <Box sx={{ margin: 8 }}>
            <Typography variant="h4">Business Hours:</Typography>
            <Typography variant="body1">
              I am available for communication Monday to Friday, from 9 AM to 6
              PM (IST). If you reach out outside of these hours, I will get back
              to you as soon as I can during the next business day.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ maxWidth: "600px", margin: "0 auto", marginTop: 14 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: 2 }}
          >
            Drop Me a Message
          </Typography>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              required
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />
            <HiredButton
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSendEmail}
              sx={{ marginTop: 2 }}
            >
              Send Message
            </HiredButton>
          </form>
        </Box>
      </StyledStack>
    </Box>
  );
};
