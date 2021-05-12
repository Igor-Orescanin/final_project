// react
import React, { useState } from "react";

// style
import { StylesProvider } from "@material-ui/core/styles";

//axios
import * as api from "../../api";

// styles to use the connection
import useStyles from "./styles";

//styles
import {
  Container,
  ThemeProvider,
  Typography,
  Link,
  Button,
  Avatar,
  TextField,
  Dialog,
  DialogContent,
  IconButton,
} from "@material-ui/core";
// alert
import Alert from "@material-ui/lab/Alert";
import CloseIcon from '@material-ui/icons/Close';

// css
import "../../App.css";

// history for the routes
import { useHistory } from "react-router-dom";

// change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

// theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#18B0C3",
      main: "#0C9EB5",
      dark: "#008CA7",
      contrastText: "#fff",
    },
  },
});

//__________________________________________________________start
const LogIn = () => {
  //hook
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory();
  const classes = useStyles();

  //alert
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };


  // handleSubmit on imputfield
  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .loginUser(formData)
      .then((response) => {
        if (!response.data.auth) {
          console.log(response.data);
          setLoginStatus("Wrong password or email");
          handleClickOpen()

        } else {
          localStorage.setItem("token", response.data.token);
          
        // do we have any device when yes  history.push ('/devices') if not  history.push("/adddevice")
          history.push("/adddevice"); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.paper}>
            <Typography
              className={classes.typography}
              component="h1"
              variant="h5"
            >
              Log-In
            </Typography>

            <Avatar className={classes.avatar} />
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
             
           
              
                <Alert 
                severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  {loginStatus}
                </Alert>
              
             
             
             

              <h2>{loginStatus}</h2>
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`${classes.inputField} ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
                variant="outlined"
                required
                id="email"
                label="Email"
                name="email"
                size="small"
                InputLabelProps={{
                  style: { color: "#007982" },
                }}
                // InputProps={{
                //   classes: {
                //     root: classes.root,
                //     focused: classes.focused,
                //     notchedOutline: classes.notchedOutline,
                //   },
                // }}
              />
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`${classes.inputField} ${classes.myInputLabel}`}
                required
                id="password"
                label="Password"
                variant="outlined"
                name="password"
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
              <div className={classes.link}>
                <Link className={classes.link} href="#" variant="body2">
                  Forgot password
                </Link>

                <Link
                  className={classes.link}
                  onClick={() => history.push("/registration")}
                  variant="body2"
                >
                  Registration
                </Link>
              </div>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="primary"
              >
                Log-In
              </Button>
            </form>
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default LogIn;
