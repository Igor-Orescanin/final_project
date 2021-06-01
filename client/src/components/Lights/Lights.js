// react
import React, { useState, useEffect } from "react";

//axios
import * as api from "../../api";//socket

import io from 'socket.io-client';

//import ShowDevices from "./Device/ShowDevices.js";
import Light from "./Light/Light.js";

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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
const socket = io(ENDPOINT,{ transports: ["websocket","polling"] });

const Lights = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();

  const {device} = props

  //a hook
  const [allLights, setAllLights] = useState("");

  //socket
 
  socket.on("gpioStatus", status=>{
    console.log("incomming status", status)
    let index = allLights.findIndex(obj=>obj.gpio === status.gpio)
    if(allLights[index])
    allLights[index].status = status.status
    console.log()
    setAllLights(allLights)
    console.log(allLights)
  })

  // to get the data for databace
  useEffect(() => {
    socket.emit('user_connect', device.userId)
    getLights();
  }, []);

  const getLights = async () => {
    const { data } = await api.fetchLights(device.serialNumber);
    setAllLights(data);
    console.log(data[0].lightsButton)
  }



  return (
    <>

      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          {/* <div className={classes.paper}> */}
          <div className={classes.top}>
            <Typography className={classes.typography}>connected</Typography>
            <Typography className={classes.typography}>your devices</Typography>
          </div>
          <div className={classes.paper}>

            {!allLights.length ? (
              <CircularProgress />
            ) : (
              allLights[0].lightsButton.map((light) => (
              <Light key={light._id}  lightObject={light} device_id={device._id} socket={socket} /> 
              ))
            )}

            <Button
              onClick={() =>      history.push({
                pathname: "/addlight",
               })}
              className={classes.addbutton}
              variant="contained"
              color="primary"
            >
              Add new Lights
            </Button>
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Lights;
