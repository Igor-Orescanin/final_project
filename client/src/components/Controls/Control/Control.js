// react
import React, { useState } from "react";
import PowerIcon from '@material-ui/icons/Power';
import PowerOffIcon from '@material-ui/icons/PowerOff';

// import ControlOff from "../../../image/light_off.svg";
// import ControlOn from "../../../image/light_on.svg";

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

const Control = (props) => {
  //const history = useHistory();

  //for styles
  const classes = useStyles();

  const control = props.controlObject;

  const { socket, device_id } = props
  //a hook
  const [controlStatus, setControlStatus] = useState(control.status);

  //for dialogfeld
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose1 = () => {
    props.controlDeleted();
    setOpen(false);
    // api.deleteControl(control._id);
  };

  //for radio button FormControlLabel
  //const [value, setValue] = useState('');

  const controlHandler = (e) => {
    socket.emit("switchStatusControl", {gpio: control.gpio, device_id: device_id, forButtons:"Control"});
    if(controlStatus){
      setControlStatus(0)
    }else{
      setControlStatus(1)
    }
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.groupButton}>
            {control.status ? (
              <div className={classes.powerOff}> <PowerOffIcon /></div>

            ) : (
              <div className={classes.powerOn}> <PowerIcon /></div>

            )}



            {/* <img width="25" height="25" src={ControlOff}></img> */}
            {/* <img width="25" height="25" src={ControlOn}></img> */}


            <Button
              onClick={() => controlHandler()}
              className={classes.button}
              variant="contained"
              color="primary"
              value={control.gpio}
            >
              {control.name}
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
                {" Are you sure you want to delete 'this Control'?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Control will disappear and it will be not connected anymore!
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

export default Control;
