import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch } from "react-redux";
import { editItem } from "./Redux-Store/Store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const findiD = users.find((item) => item?.id === Number(id));
  const [user, setUser] = useState({
    name: findiD.name,
    email: findiD.email,
  });
  const [validate, setValidate] = useState({});
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((pev) => ({
      ...pev,
      [name]: value,
    }));
  };
  const handleFocus = (event) => {
    const { name } = event.target;
    setValidate((pev) => ({
      ...pev,
      [name]: "",
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    if (user[name].trim() === "") {
      setValidate((pev) => ({
        ...pev,
        [name]: `${name} is requried`,
      }));
    }
  };
  const handleSubmit = () => {
    dispatch(editItem({ id: id, name: user.name, email: user.email }));
    navigate("/");
    setUser({ name: "", email: "" });
  };

  return (
    <>
      <Button
        onClick={() => navigate("/")}
        style={{ background: "red", padding: "1em", margin: "1em" }}
      >
        HOME
      </Button>
      <Box
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
            background: "lightyellow",
            width: "100%",
            padding: "2em",
          }}
        >
          <Typography
            variant="h5"
            style={{ margin: "1em", color: "lightgreen", textAlign: "center" }}
          >
            {" "}
            Add New User +
          </Typography>

          <TextField
            name="name"
            label="name"
            placeholder="Enter your name"
            value={user.name}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <p style={{ color: "red" }}>{validate["name"]}</p>

          <TextField
            name="email"
            label="Email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
          <p style={{ color: "red" }}>{validate["email"]}</p>
          <Button
            style={{ background: "lightgreen", padding: "1em" }}
            disabled={user.name === "" || user.email === ""}
            onClick={handleSubmit}
          >
            UPDATE
          </Button>

          <Link to="/">
            {" "}
            <Button
              style={{
                background: "orange",
                padding: "1em",
                width: "100%",
                marginTop: "1em",
              }}
            >
              Go Back <ArrowBackIcon />
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Update;
