// react
import React, { useState } from "react";

import Navbar from '../Nav/Navbar';

//axios';
import * as api from "../../api";

// material-ui
import {
  Container,
  ThemeProvider,
  Paper,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

// alert
//import Alert from "@material-ui/lab/Alert";

//styles
import useStyles from "./Styles";

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
      },
    },
  },
});

const AddLight = (props) => {
  const classes = useStyles();
  const { history } = props;

  //lengh of character
  const CHARACTER_LIMIT = 10;

  const device = props.device;
  console.log(device);

  const [formData, setFormData] = useState({
    name: "",
    gpio: "",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    api.addLight(device.serialNumber, formData)
      .then((res) => {
        console.log(res);

        // if (res.data.message === "Gpio is already assigned") {
        //   //   setLightExist(res.data.message);
        // } else if (res.data.message === "Gpio not found") {
        //   //   setLightExist(res.data.message);
        // } else {
        history.push({
          pathname: "/lights",
        });
      })
      .catch((error) => {
        if (error) {
          //   setLichtExist("register a Light!");
          //   setErrors("error");
        }
        console.log(error);
      });
  };

  return (
    <>
      <Navbar username={props.username}> </Navbar>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          {device.lightsButton.length < 1 ? (
            <Typography className={classes.typography}>
              You have not registered any Light in this system!
            </Typography>
          ) : (
            <Typography className={classes.typography}>
              Register a new Light in this system!
            </Typography>
          )}
          {/* {device.hasLight ? (
            <div></div>
          ) : (
            <Alert
              severity="error"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                ></IconButton>
              }
            >
              {lightExist}
            </Alert>
          )} */}
          <form className={classes.form} onSubmit={handleSubmit}>
            <Paper className={classes.gpioheading}>
              <Typography className={classes.typographyInfo1}>
                Choose a proper GPIO pin
              </Typography>
            </Paper>
            <Paper className={classes.paper2}>
              <Typography className={classes.typographyInfo}>17</Typography>
              <Typography className={classes.typographyInfo}>20</Typography>
              <Typography className={classes.typographyInfo}>23</Typography>
              <Typography className={classes.typographyInfo}>27</Typography>
            </Paper>
            <div className={classes.group}>
              <Typography className={classes.typography1}>Name</Typography>
              <TextField
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className={classes.inputField}
                required
                id="name"
                variant="outlined"
                name="name"
                type="text"
                size="small"
                // inputProps={{      *** Its again defined in line 169 ***
                //   maxLength: CHARACTER_LIMIT,
                // }}
                InputLabelProps={{
                  style: { color: "#007982" },
                }}
                InputProps={{
                  maxLength: CHARACTER_LIMIT,
                  classes: {
                    root: classes.root,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                }}
              />
            </div>
            <div className={classes.group}>
              <Typography className={classes.typography1}>GPIO</Typography>
              <TextField
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    gpio: e.target.value,
                  })
                }
                className={classes.inputField}
                required
                id="gpio"
                variant="outlined"
                name="gpio"
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
            </div>
          </form>
          <div>
            <Button
              onClick={handleSubmit}
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </Button>
            <Button
              className={classes.buttonHelp}
              onClick={handleClickOpen}
              variant="contained"
              color="primary"
              type="submit"
              style={{ border: "2px solid" }}
            >
              Need help?
            </Button>
          </div>
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
                You can choose your own Light Name. If you bought a <strong>Naunet </strong>
                Hub you can find the GPIO Pin at the bottom of your Hub 'The
                GPIO'. If you bought your own Hub please contact us per
                Email: <strong>naunet@naunet.com</strong>!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AddLight;
