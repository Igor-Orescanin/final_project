// react
import React, { useState, useEffect } from "react";

//axios
import * as api from "../../api";

//socket
import io from "socket.io-client";

import Control from "./Control/Control.js";

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

//socket
const ENDPOINT = "http://localhost:3005";
const socket = io(ENDPOINT, { transports: ["websocket", "polling"] });

const Controls = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();

  const device = props.device;

  //a hook
  const [allControls, setAllControls] = useState([]);

  //socket
  socket.on("gpioStatus", (status) => {
    console.log("incomming status", status);
    let index = allControls.findIndex((obj) => obj.gpio === status.gpio);
    if (allControls[index]) allControls[index].status = status.status;
    console.log();
    setAllControls(allControls);
    console.log(allControls);
  });

  // to get the data for databace
  useEffect(() => {
    getControls();
    return () => {
      socket.disconnect();
    };
  }, []);

  const getControls = async () => {
    const { data } = await api.fetchControls(device.serialNumber);
    setAllControls(data);
    console.log(data[0].controlsButton);
  };

  return (
    <>
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
              allControls[0].controlsButton.map((control) => (
                <Control controlObject={control} />
              ))
            )}

            <Button
              onClick={() =>
                history.push({
                  pathname: "/addcontrol",
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
