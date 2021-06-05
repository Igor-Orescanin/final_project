// react
import React, { useState, useEffect } from "react";

//axios
import * as api from "../../api";


import Control from "./Control/Control.js";
import Navbar from '../Nav/Navbar.js';

// styles to use the connection
import useStyles from "./Styles";

// css
import "../../App.css";

// material-ui
import {
  Container,
  Typography,
  ThemeProvider,
  Button,
  CircularProgress,
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


const Controls = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();

  const {device, socket} = props;

  //a hook
  const [allControls, setAllControls] = useState([]);

  // to get the data for databace
  useEffect(() => {
    getControls();
  }, []);

  const getControls = async () => {
    const { data } = await api.fetchControls(device.serialNumber);
    setAllControls(data[0].controlsButton);
  };

  return (
    <>
      <Navbar username={props.username}> </Navbar>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.top}>
            <Typography className={classes.typography}>connected</Typography>
            <Typography className={classes.typography}>your devices</Typography>
          </div>
          <div className={classes.paper}>
            {!allControls.length ? (
              <CircularProgress />
            ) : (
              allControls.map((control) => (
                <Control key={control._id} device_id={device._id} controlObject={control} socket={socket} />
              ))
            )}

            <Button
              onClick={() =>
                history.push({
                  pathname: "/adddevice",
                })
              }
              className={classes.addbutton}
              variant="contained"
              color="primary"
            >
              Add new Controls
            </Button>
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Controls;
