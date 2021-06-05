// react
import React, { useState } from "react";

import Navbar from '../Nav/Navbar';

//axios';
import * as api from "../../api";

// material-ui
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Container,
  ThemeProvider,
  Paper,
  IconButton,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import { useLocation } from "react-router-dom";

// alert
import Alert from "@material-ui/lab/Alert";

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
    MuiMenuItem: {
      root: {
        minHeight: "0px",
        lineHeight: "15px",
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: "10px",
      },
    },
    MuiInputBase: {
      root: {
        minWidth: "73px",
        fontSize: "12px",
      },
    },
  },
});

function AddControl(props) {
  const classes = useStyles();
  const { history } = props;

  //lengh of character
  const CHARACTER_LIMIT = 10;

  const location = useLocation();

  const device = props.device;
  console.log(device);

  const [formData, setFormData] = useState({
    name: "",
    gpio: "",
  });

  const [controlExist, setControlExist] = useState("");

  const [open, setOpen] = useState(false);

const [alert,setAlert] =useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if( formData.name !== '' || formData.gpio !== ''){


    api.addControl(device.serialNumber, formData)
      .then((res) => {
        console.log(res);

        // if (res.data.message === "Gpio is already assigned") {
        //   //   setLightExist(res.data.message);
        // } else if (res.data.message === "Gpio not found") {
        //   //   setLightExist(res.data.message);
        // } else {
        history.push({
          pathname: "/devices",
        });
      })
      .catch((error) => {
        if (error) {
          //   setLichtExist("register a Light!");
          //   setErrors("error");
        }
        console.log(error);
      });
    }else{ setAlert(true) }
  };

  return (
    <>
      <Navbar username={props.username}> </Navbar>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          {device.controlsButton.length < 1 ? (
            <Typography className={classes.typography}>
              You have not registered any Device in this system yet!
            </Typography>
          ) : (
            <Typography className={classes.typography}>
              Register a new Device in this system!
            </Typography>
          )}
          {alert? 
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
              Name or GPIO is missing
            </Alert> : <div></div>}


        
            <form className={classes.form} onSubmit={handleSubmit}>
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
</form>

            <div className={classes.paper}>
            <Typography className={classes.headingSec}>
              Choose any % for an Alert
            </Typography>

            <div className={classes.input}>
              <div className={classes.name}>
                <Typography className={classes.typo}>Fresh water</Typography>
              </div>
              <div className={classes.test}>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel
                    className={classes.typo2}
                    id="demo-simple-select-outlined-label"
                  >
                    Water %
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={''}
                    onChange={''}
                    label="Water1"
                    InputProps={{
                      classes: {
                        root: classes.root,
                        focused: classes.focused,
                        notchedOutline: classes.notchedOutline,
                      },
                    }}
                  >
                    <MenuItem value={0}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>10 </MenuItem>
                    <MenuItem value={25}>25 </MenuItem>
                    <MenuItem value={40}>40 </MenuItem>
                  </Select>
                </FormControl>

               
              </div>
            </div>
          </div>

         




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
              {"What can I do here?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              You can choose your own Device Name. And choose a proper GPIO Nummer.
                If you have any problem please contact us per
                Email: <strong>naunetmon@gmail.com</strong>!
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
}

export default AddControl;
