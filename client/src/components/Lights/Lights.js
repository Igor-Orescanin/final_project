// react
import React, { useState, useEffect } from "react";

//axios
import * as api from "../../api";

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

const Lights = (props) => {
  //for routes
  const { history } = props;
  console.log(props);
  //for styles
  const classes = useStyles();

  const {device, socket} = props;

  //a hook
  const [allLights, setAllLights] = useState([]);

  // to get the data for databace
  useEffect(() => {
    getLights();
  }, []);

  const getLights = async () => {
    const { data } = await api.fetchLights(device.serialNumber);
    //console.log((data.length));
    setAllLights(data[0].lightsButton);
  };

  const lightDeletedHandler = async (serialNumber, gpio) => {
    await api.deleteLight(device.serialNumber, gpio);
    getLights();
  }

  return (
    <>
      <Navbar username={props.username}> </Navbar>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.top}>
            <Typography className={classes.typography}>Status</Typography>
            <Typography className={classes.typography}>Your Lights</Typography>
          </div>
          <div className={classes.paper}>
            {!allLights.length ? (
              <CircularProgress />
            ) : (
              allLights.map((light) => (
                <Light key={light._id}  lightObject={light} device_id={device._id} socket={socket} lightDeleted={() => lightDeletedHandler(device.serialNUmber, light.gpio)}/>
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
