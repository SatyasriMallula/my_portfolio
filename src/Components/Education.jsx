import React from "react";
import {
  Box,
  TableContainer,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from "@mui/material";
export const Education = () => {
  const educationArray = [
    {
      name: "B-Tech(Computer Science & Engineering)",
      school: "GIET Engineering College",
      location: "Rajamahendravaram",
      passedout: "2022",
      percentage: "78.4 %",
    },
    {
      name: "Intermediate(Mpc)",
      school: "Vikas Junior College",
      location: "Samisragudem",
      passedout: "2018",
      percentage: "97 %",
    },
    {
      name: "SSE",
      school: "Z.P.H School",
      location: "Tadimalla",
      passedout: "2016",
      percentage: "85 %",
    },
  ];
  return (
    <Box>
      <Typography variant="h3" marginTop={8} color="black">
        Education Details
      </Typography>
      <Typography variant="subtitle1" marginTop={5}>
        I have pursued a solid education in Computer Science and Engineering,
        excelling academically and gaining valuable skills. Here are the
        highlights of my educational background.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          margin: "8rem",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            width: "80%",
            display: "flex",
            height: "50%",
            alignItems: "center",
            boxShadow: "0px 0px 5px 0px olive",
          }}
        >
          <Table>
            <TableHead sx={{ margin: "3rem" }}>
              <TableRow
                sx={{
                  "& > *": {
                    padding: "2rem",
                    border: "2px 0px solid olive",
                    margin: "3rem",
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "olive",
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "olive",
                    padding: "20px",
                  }}
                >
                  Course
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "olive",
                  }}
                >
                  School/College
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "olive",
                  }}
                >
                  Location
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "olive",
                  }}
                >
                  Graduation Year
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "olive",
                  }}
                >
                  CGPA/Percentage
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {educationArray.map((item) => {
                return (
                  <TableRow
                    key={item}
                    sx={{ "& > *": { padding: "50px", fontSize: "18px" } }}
                  >
                    <TableCell sx={{ padding: "30px 10px", fontSize: "16px" }}>
                      {item.name}
                    </TableCell>
                    <TableCell sx={{ padding: "30px 10px", fontSize: "16px" }}>
                      {item.school}
                    </TableCell>
                    <TableCell sx={{ padding: "30px 10px", fontSize: "16px" }}>
                      {item.location}
                    </TableCell>
                    <TableCell sx={{ padding: "30px 10px", fontSize: "16px" }}>
                      {item.passedout}
                    </TableCell>
                    <TableCell sx={{ padding: "30px 10px", fontSize: "16px" }}>
                      {item.percentage}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
