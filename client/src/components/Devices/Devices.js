// react
import React, { useState, useEffect } from "react";

//axios
import * as api from "../../api";

//import ShowDevices from "./Device/ShowDevices.js";
import Device from "./Device/Device.js";

// css
import "../../App.css";

// styles to use the connection
import useStyles from "./styles";

import Navbar from '../Nav/Navbar';
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

//__________________________________________________________start
const Devices = (props) => {

  const { history } = props;
  const classes = useStyles();

  const username = props.username
  const userId = props.userId

  console.log(props);
  //a hook
  const [allDevices, setAllDevices] = useState([]);

  console.log(allDevices);
  // to get the data for databace
  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    const { data } = await api.fetchDevices(userId);
    setAllDevices(data);
  }

  const deviceDeleteHandler = async (_id) => {
    console.log(_id);
    await api.deleteDevice(_id);
    getDevices();
  }

  const fetchDevice = props.fetchDevice

  return (

    <>
      <Navbar username={props.username}> </Navbar>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.top}>
            <Typography className={classes.typography}>Status</Typography>
            <Typography className={classes.typography}>Your Hubs</Typography>
          </div>
          <div className={classes.paper}>

            {!allDevices.length ? (
              <CircularProgress />
            ) : (
              allDevices.map((dev, index) => (

                <Device key={index} deviceObject={dev} username={username} deviceDeleted={() => deviceDeleteHandler(dev._id)} fetchDevice={() => fetchDevice(dev)} />
              ))
            )}

            <Button
              onClick={() => history.push({
                pathname: "/addhub",
                state: { userId: userId, username: username }
              })}
              className={classes.addbutton}
              variant="contained"
              color="primary"
            >
              Add new Hubs
            </Button>
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>

    </>

  );
};

export default Devices;
