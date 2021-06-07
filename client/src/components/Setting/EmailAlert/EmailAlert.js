// react
import React, { useState } from "react";

import useStyles from "./styles.js";

// material-ui
import {
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  Container,
  ThemeProvider,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

//axios';
import * as api from "../../../api/index";

import Navbar from "../../Nav/Navbar";

import { useLocation } from "react-router-dom";

// style
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

function EmailAlert(props) {
  const { history } = props;

  const { device } = props;

  const location = useLocation();

  const deviceId = device._id;

  let cleanAlertThresholdProps;
  let wasteAlertThresholdProps;

  if (location.state !== undefined) {
    cleanAlertThresholdProps = props.location.state.cleanAlertThreshold;
    wasteAlertThresholdProps = props.location.state.wasteAlertThreshold;
  } else {
    cleanAlertThresholdProps = props.device.cleanAlertThreshold;
    wasteAlertThresholdProps = props.device.wasteAlertThreshold;
  }

  const classes = useStyles();
  let [cleanAlertThreshold, setCleanAlertThreshold] = useState(
    cleanAlertThresholdProps
  );
  let [wasteAlertThreshold, setWasteAlertThreshold] = useState(
    wasteAlertThresholdProps
  );

  const handleChangeFresh = (event) => {
    setCleanAlertThreshold(event.target.value);
    console.log(cleanAlertThreshold)
  };

  const handleChangeGray = (event) => {
    setWasteAlertThreshold(event.target.value);
    console.log(wasteAlertThreshold)
  };

  const callApi = () => {
    console.log(cleanAlertThreshold, wasteAlertThreshold);

    api
      .updateEmailAlert(deviceId, {
        cleanAlertThreshold: cleanAlertThreshold,
        wasteAlertThreshold: wasteAlertThreshold,
      })
      .then((res) => {
        console.log(res);
      });
    history.push({
      pathname: "/water",
      state: {
        cleanAlertThreshold,
        wasteAlertThreshold,
      }
    })
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Navbar username={props.username}> </Navbar>

      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.paper}>
            <Typography className={classes.heading}>
              Set your own % for an Alert to your Email{" "}
            </Typography>
            <Typography className={classes.headingSec}>
              Choose any % for an Alert
            </Typography>

            <div className={classes.input}>
              <div className={classes.name}>
                <Typography className={classes.typo}>Fresh water</Typography>
                <Typography className={classes.typo}>Waste water</Typography>
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
                    value={cleanAlertThreshold}
                    onChange={handleChangeFresh}
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
                    <MenuItem value={10}>10 %</MenuItem>
                    <MenuItem value={20}>20 %</MenuItem>
                    <MenuItem value={30}>30 %</MenuItem>
                    <MenuItem value={40}>40 %</MenuItem>
                  </Select>
                </FormControl>

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
                    value={wasteAlertThreshold}
                    onChange={handleChangeGray}
                    label="Water2"
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
                    <MenuItem value={60}>60 %</MenuItem>
                    <MenuItem value={70}>70 %</MenuItem>
                    <MenuItem value={80}>80 %</MenuItem>
                    <MenuItem value={90}>90 %</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <Typography className={classes.notification}>
            {cleanAlertThreshold === 0 && wasteAlertThreshold === 0
              ? "Email alert disable"
              : "Notification goes to your Email"}
          </Typography>

          <div>
            <Button
              className={classes.button}
              onClick={callApi}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save
            </Button>

            <Button
              onClick={handleClickOpen}
              className={classes.buttonHelp}
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
                Choose a percentage to get an email alert when your tank level is critical.
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

export default EmailAlert;
