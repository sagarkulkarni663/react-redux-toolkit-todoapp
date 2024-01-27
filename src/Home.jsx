import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/base";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearItem } from "./Redux-Store/Store";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
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
      <TableContainer component={Paper}>
        <Link to="/create">
          <Button
            style={{
              background: "lightgreen",
              padding: "1em",
              margin: "1em",
              cursor: "pointer",
            }}
          >
            Create user +
          </Button>
        </Link>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{ background: "orange" }}>
              <TableCell>ID</TableCell>
              <TableCell align="center">NAME</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">EDIT</TableCell>
              <TableCell align="center">DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row,index) => (
              <TableRow
                key={row.name + index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center" style={{ cursor: "pointer" }}>
                  <Link
                    to={`/update/${row.id}`}
                  >
                    {<EditIcon />}
                  </Link>
                </TableCell>

                <TableCell align="center" style={{ cursor: "pointer" }}>
                  {
                    <DeleteIcon
                      onClick={() => dispatch(clearItem({ id: row.id }))}
                    />
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    </>

  );
};
export default Home;
