import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Defaultpage = () => {
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "30px",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">
          Developed using{" "}
          <a href="https://redux-toolkit.js.org/" target="_blank" rel="noreferrer">
            Redux-Toolkit
          </a>
        </Typography>
        <Box style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <Link to="/home">
            <Button style={{ background: "lightgreen", padding: "1em" }}>
              TODO-APPLICATION
            </Button>
          </Link>
          <Link to="/counter">
            <Button style={{ background: "lightblue", padding: "1em" }}>
              COUNTER-APPLICATION
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Defaultpage;
