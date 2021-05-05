// react
import React,{useState, useEffect} from "react";

// axios connection to server
// import fetchDevices from '../../api/axios.js'
// import addDevice from '../../api/axios.js'
// import deleteDevice from '../../api/axios.js'

import * as api from '../../api'

//c onnection
import NavbarSec from "../Nav/NavbarSec.js";
import Device from "./Device/Device.js"

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

  //for dialogfeld
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



//a hook
  const [allDevices, setAllDevices ] = useState([]) 


// to get the data for databace
useEffect(() => {

  api.fetchDevices()
  .then(res =>{
    setAllDevices(res.data)
    console.log(res.data)
  })

}, [])







  return (
    <>
      <NavbarSec />

      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.paper}>
            <div className={classes.top}>
            <Typography className={classes.typography}>connected</Typography>
            <Typography className={classes.typography}>your devices</Typography>
            </div>


{/*             
alldevices.map(dev => {
  return (
    <div>
    <Device value={dev.use}/>
    </div>
  )
} )  */}

       

            <Button
              onClick={() => history.push("/adddevice")}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Add new Devices
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Devices;
