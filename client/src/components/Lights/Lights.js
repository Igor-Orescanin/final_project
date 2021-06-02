// react
import React, { useState, useEffect } from "react";

//axios
import * as api from "../../api";

//socket
import io from "socket.io-client";

import Light from "./Light/Light.js";
import Navbar from '../Nav/Navbar';

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

const Lights = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();

  const device = props.device;

  //a hook
  const [allLights, setAllLights] = useState("");

  //socket
  socket.on("gpioStatus", (status) => {
    console.log("incomming status", status);
    let index = allLights.findIndex((obj) => obj.gpio === status.gpio);
    if (allLights[index]) allLights[index].status = status.status;
    console.log();
    setAllLights(allLights);
    console.log(allLights);
  });

  // to get the data for databace
  useEffect(() => {
    getLights();
    return () => {
      socket.disconnect();
    };
  }, []);

  const getLights = async () => {
    const { data } = await api.fetchLights(device.serialNumber);
    setAllLights(data);
    console.log(data[0].lightsButton);
  };


  // const lightDeleteHandler = async (_id) => {
  //   console.log(_id);
  //   await api.deleteLight(_id);
  //   getLights();
  // } maybe for the delete but not sure


  const fetchDevice = props.fetchDevice




  return (
    <>
       <Navbar username={props.username}> </Navbar>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.top}>
            <Typography className={classes.typography}>connected</Typography>
            <Typography className={classes.typography}>your Lights</Typography>
          </div>
          <div className={classes.paper}>
            {!allLights.length ? (
              <CircularProgress />
            ) : (
              allLights[0].lightsButton.map((light) => (
                <Light lightObject={light} 
                // // key={light._id}  lightDeleted={() => lightDeleteHandler(light._id)} fetchLight={() => fetchLight(light._id)
                // } maybe for delete but not working
                
                />
              ))
            )}

            <Button
              onClick={() =>
                history.push({
                  pathname: "/addlight",
                })
              }
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
