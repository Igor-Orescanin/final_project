// react
import React from "react";

// useStyles to use the connection
import useStyles from "./styles";

// material-ui styles
import { Container, Button } from "@material-ui/core";
// import { StylesProvider } from "@material-ui/core/styles"; 
// components
import Navbar from "../Nav/Navbar.js";

// to connect the routes
import { useHistory } from "react-router-dom";

// css
import "../../App.css";

const Welcome = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Navbar />

      <Container className={classes.welcome}>
        <div>
          <Button
            variant="outlined"
            className={classes.welcomeBtn}
            color="primary"
            onClick={() => history.push("/water")}
          >
            Water
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            className={classes.welcomeBtn}
            color="primary"
            onClick={() => history.push("/light")}
          >
            Light
          </Button>
        </div>
        <div>
          <Button
            variant="outlined"
            className={classes.welcomeBtn}
            color="primary"
            onClick={() => history.push("/controls")}
          >
            Controls
          </Button>
        </div>
        <div className={classes.footer}></div>
      </Container>
    </>
  );
};

export default Welcome;
