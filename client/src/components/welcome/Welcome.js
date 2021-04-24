import React from "react";
import Button from "@material-ui/core/Button"; //button
import useStyles from "./styles";

import { makeStyles } from '@material-ui/core/styles'; 
import { Container } from "@material-ui/core";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Navbar from "../Nav/Navbar.js";


import '../../App.css';

function Welcome() {
  const classes = useStyles();
  return (
    <>
      <Navbar />

      <Container className={classes.welcome}>
          <div className={classes.welcomeBtn}>
              <Button
                className={classes.buttonWel} variant="contained" color="primary">
             Water
          </Button>
          <Button
            className={classes.buttonWel} variant="contained" color="primary">
            Light
          </Button>
          <Button className={classes.buttonWel} variant="contained" color="primary">
            Controls
          </Button>
        </div>
        <div  className={classes.background}>
        </div>
      </Container>
    </>
  );
}

export default Welcome;
