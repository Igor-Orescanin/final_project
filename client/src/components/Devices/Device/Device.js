// react
import React, { useState, useEffect } from "react";

// axios
import * as api from "../../../api";

import { useHistory } from "react-router-dom";

//styles to use the connection
import useStyles from "./styles";

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';

//css
import "../../../App.css";

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
  FormControlLabel,
  Radio,
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

const Device = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();

//a hook 
  const [allDevices, setAllDevices] = useState([]);

  useEffect(async () => {
    const { data } = await api.deleteDevice()
   
      setAllDevices(data)
   
    console.log(data);
    console.log(data[1].deviceId);

  },[allDevices]);



  //for dialogfeld
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //for radio button FormControlLabel
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.groupButton}>
            {/* <FormControlLabel
            className={classes.radioButton}
              value={props.value}
              disabled
              control={<Radio />}
              label=""
            /> */}
            <CheckCircleOutlineIcon className={classes.checkIcon}/>
            <NotInterestedIcon className={classes.noIcon}/>
            <Button
              onClick={() => history.push("/welcome")}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Sign-In
            </Button>

            <Button
              onClick={handleClickOpen}
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
            <Dialog
              className={classes.dialog}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {" Are you sure you want to delete 'this Device'?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Device will be disappear and is not connected anymore!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Device;
