// react
import React, { useState } from "react";

// axios
//import * as api from "../../../api";

import { useHistory } from "react-router-dom";

//styles to use the connection
import useStyles from "./styles";

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import DeleteIcon from '@material-ui/icons/Delete';

//css
import "../../../App.css";

// material-ui
import {
  Container,
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

const Device = (props) => { //props.deviceObject.deviceId
  //for routes
  const history = useHistory();
  //const { history } = props;


  //for styles
  const classes = useStyles();

  const device = props.deviceObject

  //a hook
  //const [device, setDevice] = useState();


  //for dialogfeld
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };
  const handleClose1 = () => {
    props.deviceDeleted();
    setOpen(false);
  };

  //for radio button FormControlLabel
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const sentToApp = () => {
    props.fetchDevice(device)
    history.push({
      pathname: "/welcome",

    })

  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.groupButton}>
            {device.isConnected ? <CheckCircleOutlineIcon className={classes.checkIcon} /> : <NotInterestedIcon className={classes.noIcon} />}
            {console.log(device.serialNumber)}
            <Button
              onClick={sentToApp}
              className={classes.button}
              variant="contained"
              color="primary"


            //disabled={device.serialNumber === "ac:67:5d:62:ec:e7" ? null : "true"}

            >
              {device.deviceName}

            </Button>
            <DeleteIcon className={classes.deleteIcon} onClick={handleClickOpen} />

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
                  Device will disappear and it will be not connected anymore!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={handleClose1} color="primary" autoFocus >
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
