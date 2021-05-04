// react
import React from "react";

//connection
import NavbarSec from "../Nav/NavbarSec.js";

//styles to use the connection
import useStyles from "./styles";

//css
import "../../App.css";

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

const AddMultiDevice = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();

  //for dialogfeld
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavbarSec />

      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.paper}>
            <Typography className={classes.typography}>connection</Typography>
            <Typography className={classes.typography}>your devices</Typography>

         <Device/>
         
            <Button
              onClick={() => history.push("/adddevice")}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Add new Devices
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AddMultiDevice;
