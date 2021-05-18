// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";

//axios';
import * as api from "../../api";

//connection
import Navbar from "../Nav/Navbar.js";

//import { useHistory } from "react-router-dom";

//css
import "../../App.css";

// material-ui

import {
  Container,
  ThemeProvider,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";

// alert
import Alert from "@material-ui/lab/Alert";

//styles to use the connection
import useStyles from "./styles";

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
  },
});

const AddDevice = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();

  
   const userId = props.userId
    console.log(userId)

   //const username = props.location.state.username

  //a hook
  const [formData, setFormData] = useState({
    deviceName: "",
    serialNumber: "",
    userId: userId,
  });

//console.log(userId)

  const [deviceExist, setDeviceExist] = useState('');

  const [errors, setErrors] = useState('');

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

// console.log(userId)
 console.log(formData)

    api.asignDevice(formData)
    .then((res)=>{

      console.log(res)

       if(res.data.message === "Device is already assigned"){
       setDeviceExist(res.data.message)
       handleClickOpen()
      
       // ---------------------- is not working right now not sure why
      }else{
       // history.push('/devices')
         history.push({
           pathname: "/devices",
       
         })
       }
    
      
     
    }).catch((error) => {
      if(error){ setDeviceExist('Device exist')
        setErrors('error')}
      console.log(error);
    });
    
  };

  return (
    <>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          
          <Container className={classes.container}>
            <div className={classes.paper}>
              <Typography className={classes.typography}>
                You don't have any devices registered in this system!{" "}
              </Typography>

              <Typography> {deviceExist} </Typography>

              <Alert 
              severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                 
                  </IconButton>
                }
              >
               {deviceExist}
              </Alert>


              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      deviceName: e.target.value,
                    })
                  }
                  className={`${classes.inputField} ${classes.myInputLabel}`}
                  required
                  id="deviceName"
                  label="Device Name"
                  variant="outlined"
                  name="deviceName"
                  type="text"
                  size="small"
                  InputLabelProps={{
                    style: { color: "#007982" },
                  }}
                   InputProps={{
                     classes: {
                       root: classes.root,
                       focused: classes.focused,
                       notchedOutline: classes.notchedOutline,
                     },
                   }}
                />

                <TextField
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      serialNumber: e.target.value
                    })
                  }
                  className={`${classes.inputField} ${classes.myInputLabel}`}
                  required
                  id="serialNumber"
                  label="Device Id"
                  variant="outlined"
                  name="serialNumber"
                  type="text"
                  size="small"
                  InputLabelProps={{
                    style: { color: "#007982" },
                  }}
                   InputProps={{
                     classes: {
                       root: classes.root,
                       focused: classes.focused,
                       notchedOutline: classes.notchedOutline,
                     },
                   }}
                />

                <Button
                  onClick={handleSubmit}
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Register
                </Button>
                <Button
                 // onClick={handleSubmit}
                  className={classes.buttonHelp}
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ border: '2px solid' }}
                
                >
                  Need help?
                </Button>
              </form>
              <div className={classes.footer}></div>
            </div>
          </Container>
        </ThemeProvider>
      </StylesProvider>
    </>
  );

};

export default AddDevice;
