import React from "react";
import "./Rentpage.css";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import "./carData";
import retrieveInfo from "./carData";

import firebase from "./firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));
retrieveInfo();
function Rentpage() {
  const classes = useStyles();

  //DATABASE

  return (
    <div className="rentpage">
      <Header />

      <div>
        <h1 className="title">RENT YOUR CAR</h1>
        <hr></hr>
      </div>
      <Grid container justify="center" alignItems="center">
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <div className="infosResults"></div>
    </div>
  );
}

export default Rentpage;
