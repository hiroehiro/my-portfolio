import React from "react";
import Header from "../components/Header";
import Divider from "../components/Divider";
import Typography from "@mui/material/Typography";
import "devicon";

const Skills: React.FC = () => {
  return (
    <>
      <Header />
      <br />
      <Typography variant="h4" align="center">
        スキル
      </Typography>
      <br />
      <Divider />
    </>
  );
};

export default Skills;
