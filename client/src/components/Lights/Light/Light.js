// react
import React, { useState } from "react";
import * as api from '../../../api'

import LightOff from "../../../image/light_off.svg";
import LightOn from "../../../image/light_on.svg";

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

const Light = (props) => {

  //for styles
  const classes = useStyles();

  const light = props.lightObject;

  const { socket, device_id } = props
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

    props.lightDeleted();
    setOpen(false);
    api.deleteLight(light._id);

  };

  const lightHandler = (e) => {
    socket.emit("switchStatusLight", { gpio: light.gpio, device_id: device_id, forButtons: "Light" });

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
                {" Are you sure you want to delete 'This Light'?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Light will disappear and it will be not connected anymore!
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
