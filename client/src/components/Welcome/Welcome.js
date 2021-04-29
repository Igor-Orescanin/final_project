// react
import React from "react";

// useStyles to use the connection
import useStyles from "./styles";

// material-ui styles
import { Container, Button, ThemeProvider } from "@material-ui/core";
// import { StylesProvider } from "@material-ui/core/styles";
// components
import Navbar from "../Nav/Navbar.js";

// to connect the routes
import { useHistory } from "react-router-dom";

// css
import "../../App.css";

//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#18B0C3",
      main: "#0C9EB5",
      dark: "#008CA7",
      contrastText: "#fff",
    },
  },
});


//Welcome-page
const Welcome = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Container className={classes.welcome}>
          <Button
            variant="contained"
            className={classes.welcomeBtn}
            color="primary"
            onClick={() => history.push("/water")}
          >
            Water
          </Button>

          <Button
            variant="contained"
            className={classes.welcomeBtn}
            color="primary"
            onClick={() => history.push("/light")}
          >
            Light
          </Button>

          <Button
            variant="contained"
            className={classes.welcomeBtn}
            color="primary"
            onClick={() => history.push("/controls")}
          >
            Controls
          </Button>

          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Welcome;
