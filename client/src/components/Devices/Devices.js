// react
import React, { useState, useEffect } from "react";

//axios
import * as api from "../../api";

//connection to components
import NavbarSec from "../Nav/NavbarSec.js";
import ShowDevices from "./Device/ShowDevices.js";

// styles to use the connection
import useStyles from "./styles";

// css
import "../../App.css";

// material-ui
import {
  Container,
  Typography,
  ThemeProvider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

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
    secondary: {
      light: "#18B0C3",
      main: "##fff",
      dark: "#008CA7",
      contrastText: "#0C9EB5",
    },
  },
});

const Devices = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();

 
  return (
    <>
      <NavbarSec />

      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          {/* <div className={classes.paper}> */}
            <div className={classes.top}>
              <Typography className={classes.typography}>connected</Typography>
              <Typography className={classes.typography}>
                your devices
              </Typography>
            </div>
            <div className={classes.paper}>
            <ShowDevices />
            <Button
              onClick={() => history.push("/adddevice")}
              className={classes.addbutton}
              variant="contained"
              color="primary"
            >
              Add new Devices
            </Button>
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Devices;
