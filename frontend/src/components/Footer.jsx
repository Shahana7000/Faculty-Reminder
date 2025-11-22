import React from "react";
import { Box, Container, Typography, Divider, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 3,
        backgroundColor: "#0d47a1", // Deep blue tone
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
          Lecture Reminder System
        </Typography>

        <Typography variant="body2" sx={{ mb: 1 }}>
          A smart reminder platform designed for colleges to notify faculty and students
          about upcoming lectures. Built using the MERN stack.
        </Typography>

        <Divider sx={{ backgroundColor: "rgba(255,255,255,0.3)", my: 2 }} />

        <Typography variant="body2" sx={{ mb: 1 }}>
          © {new Date().getFullYear()} Lecture Reminder. All rights reserved.
        </Typography>

        {/* <Typography variant="body2">
          Built with ❤️ using{" "}
          <Link href="https://react.dev/" color="inherit" underline="hover">
            React
          </Link>{" "}
          &{" "}
          <Link href="https://mui.com/" color="inherit" underline="hover">
            Material UI
          </Link>
        </Typography> */}
      </Container>
    </Box>
  );
}
