import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./Redux-Store/Counterstore";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((item) => item.counter);
  const navigate = useNavigate();
  return (
    <>
      <Button
        onClick={() => navigate("/")}
        style={{ background: "red", padding: "1em", margin: "1em" }}
      >
        HOME
      </Button>
      <div
        style={{
          width: "50%",
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "4em",
            gap: "70px",
            background: "linear-gradient(to bottom, #ff9999 0%, #66ccff 100%",
          }}
        >
          <Typography
            variant="h3"
            style={{ color: counter.count >= 0 ? "green" : "red" }}
          >
            {counter.count}
          </Typography>
          <Box style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <Button
              onClick={() => dispatch(increment())}
              style={{ background: "lightgreen", padding: "1em" }}
            >
              INCREMENT
            </Button>
            <Button
              onClick={() => dispatch(decrement())}
              style={{ background: "red", padding: "1em" }}
            >
              DECREMENT
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Counter;
