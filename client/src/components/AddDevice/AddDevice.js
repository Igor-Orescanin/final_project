// react
import React, { useState, useEffect } from "react";


//axios';
import * as api from "../../api";


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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
  overrides: {
    MuiDialog: {
      paper: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#30D4DE",
        borderStyle: "solid",
      }
    }
  }
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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

//a hook
const [allDevices, setAllDevices] = useState([]);

// to get the data for databace
useEffect(async () => {
  const { data } = await api.fetchDevices(userId);

  setAllDevices(data);
}, []);


  //lengh of character
  const CHARACTER_LIMIT = 10;

  const handleSubmit = (e) => {
    e.preventDefault();

// console.log(userId)
 console.log(formData)


    api.asignDevice(formData)
    .then((res)=>{

      console.log(res)


       if(res.data.message === "Device is already assigned"){
       setDeviceExist(res.data.message)
   
      
      
      } else if(res.data.message === "Device not found"){
       setDeviceExist(res.data.message)
      


      }else{
       // history.push('/devices')
         history.push({
           pathname: "/devices",
       
         })
       }
    
      
     
    }).catch((error) => {
      if(error){ setDeviceExist('register a Device!')
        setErrors('error')}
      console.log(error);
    });

  
  };

 
  return (
    <>
   
        <ThemeProvider theme={theme}>
          
          <Container className={classes.container}>
            <div className={classes.paper}>

            {allDevices.length < 1 ?
                <Typography className={classes.typography}>
                   You don't have any devices registered in this system!
              </Typography>
              :
              <Typography className={classes.typography}>
                 Register a new device in this system!
              </Typography>
              }
              {deviceExist.length < 1 ?(
                <div></div>
              ):
              <Alert 
              severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    
                  >
                 
                  </IconButton>
                }
              >
               {deviceExist}
              </Alert>
              }

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
                  inputProps={{
                    maxlength: CHARACTER_LIMIT
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
                </form>
                <Button
                 // onClick={handleSubmit}
                  className={classes.buttonHelp}
                  onClick={handleClickOpen} 
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ border: '2px solid' }}
                
                >
                  Need help?
                </Button>
                <Dialog
              className={classes.dialog}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"What need I to do here?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Your can choose your own Device Name.
If you bought a Naunet Device you can find the Id of the bottom of your Device 'the Device Id'.
If you bought your own device pleace contact us per Email: NaunetMon.com!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>



       
              <div className={classes.footer}></div>
            </div>
          </Container>
        </ThemeProvider>
  
    </>
  );

};

export default AddDevice;
