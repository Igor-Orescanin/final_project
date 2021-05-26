// react
import React, { useState, useEffect } from "react";

//axios
import * as api from "../../api";

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

const Lights = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();

  const device = props.device

  //a hook
  const [allLights, setAllLights] = useState([]);

  // to get the data for databace
  useEffect(() => {
    getLights();
  }, []);

  const getLights = async () => {
    const { data } = await api.fetchLights(device.serialNumber);
    setAllLights(data);
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
              allLights.map((light) => (
              <Light   lightObject={light} /> // Igor because Mari is not sure
           // <Light   deviceObject={dev} username={username} />
              ))
            )}

            {/* here will be array of light objects */}

            <Button
              onClick={() =>      history.push({
                pathname: "/addlight",
                // state: {userId : userId, username: username}   // ?? Igor
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
