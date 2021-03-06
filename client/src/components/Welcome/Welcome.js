// react
import React from "react";

// useStyles to use the connection
import useStyles from "./styles";

// material-ui styles
import { Container, Button, ThemeProvider } from "@material-ui/core";
// import { StylesProvider } from "@material-ui/core/styles";

// to connect the routes
import { useHistory } from "react-router-dom";

// css
import "../../App.css";

import Navbar from "../Nav/Navbar";

//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

//socket
//import io from "socket.io-client";

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
//socket

//Welcome-page
const Welcome = (props) => {
  const history = useHistory();
  const classes = useStyles();

  // const device = props.deviceObject
  // console.log(device)

  //should be the same
  const { device, socket } = props;

  socket.emit('user_connect', device.userId)

  console.log(device);

  return (
    <>
      <Navbar username={props.username}> </Navbar>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={() => history.push("/water")}
          >
            Water
          </Button>

          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={() =>
              history.push(device.lightsButton.length > 0 ? "/lights" : "/addlight")
            }
          >
            Lights
          </Button>

          <Button
            variant="contained"
            className={classes.button}
            color="primary"
            onClick={() =>
              history.push(device.controlsButton.length > 0 ? "/devices" : "/adddevice")
            }
          >
            Devices
          </Button>

          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Welcome;
