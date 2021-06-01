// react
import React, { useState} from "react";

import LightOff from "../../../image/light_off.svg";
import LightOn from "../../../image/light_on.svg";

// axios
import * as api from "../../../api";

//socket
import io from "socket.io-client";

import { useHistory } from "react-router-dom";

//styles to use the connection
import useStyles from "./Styles";

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

import DeleteIcon from "@material-ui/icons/Delete";

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

const Light = (props) => {
  const history = useHistory();

  //for styles
  const classes = useStyles();

  const light = props.lightObject;
  console.log(light);
  //a hook
  // const [light, setLight] = useState();

  //for dialogfeld
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
   // props.lightDeleted();
    setOpen(false);
   // api.deleteLight(light._id);
  };

  //for radio button FormControlLabel
  //const [value, setValue] = useState('');

  const lightHandler = (e) => {
    socket.emit("switchStatus", { gpio: e.target.value });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.groupButton}>
            {light.status ? (
              <img width="25" height="25" src={LightOff}></img>
            ) : (
              <img width="25" height="25" src={LightOn}></img>
            )}

            <Button
              onClick={lightHandler}
              className={classes.button}
              variant="contained"
              color="primary"
              value={light.gpio}
            >
              {light.name}
            </Button>
            <DeleteIcon
              className={classes.deleteIcon}
              onClick={handleClickOpen}
            />

            <Dialog
              className={classes.dialog}
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {" Are you sure you want to delete 'this Light'?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Light will be disappear and is not connected anymore!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={handleClose1} color="primary" autoFocus>
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

export default Light;
