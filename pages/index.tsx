import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Box>
        <Typography variant="h1" align="center">
          Welcome to my portfolio!
        </Typography>
        <Box display="flex" justifyContent="center" mt={4}>
          <Link href="/skills" underline="none">
            <Button variant="contained" size="large">
              My Skills
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Home;
