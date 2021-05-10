// react
import React, { useState, useEffect } from "react";
import { StylesProvider } from "@material-ui/core/styles";

//axios
import * as api from "../../api";

// react-router-dom
import { BrowserRouter, Link, Route } from "react-router-dom";

// css
import "../../App.css";

// history
import { useHistory } from "react-router-dom";

//styles
import {
  Container,
  ThemeProvider,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Button,
  Avatar,
  TextField,
} from "@material-ui/core";

//styles to use the connection
import useStyles from "./styles.js";

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
});

//_______________________________________start

const Registration = (props) => {
  // const history = useHistory();
  const classes = useStyles();
  const { history } = props;

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    macAddress: "",
  });

  const [errors, setErrors] = useState([]);

  const [mailExist, setMailExist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { history } = props;

    api
      .addUser(formData)
      .then((res) => {
        if (res.data.error) {
          setErrors(res.data.error);

          //setMailExist("")
        } else if (res.data.msg === "Mail exists") {
          //what  the fuck is going on
          setMailExist(res.data.msg); // maybe get insteat of set hook ??
          setErrors("");
        } else {
          // why this don't inizialieren
          history.push("/adddevice");
          console.log("hey igor");
        }

        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //for dialogfeld
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              Registration
            </Typography>

            <Avatar className={classes.avatar} />
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className={classes.inputField}
                variant="outlined"
                required
                id="username"
                label="Name"
                name="username"
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

              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={classes.inputField}
                variant="outlined"
                required
                id="email"
                label="Email"
                name="email"
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
                type="password"
                size="small"
                BorderColor="red"
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

              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className={`${classes.inputField} ${classes.myInputLabel}`}
                required
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                type="password"
                size="small"
                BorderColor="red"
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

              <Button
                className={classes.button}
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </form>
            {errors.length < 1 ? (
              <div></div>
            ) : (
              errors.map((error,index) => <h1 key={index}>{error.msg}</h1>)
            )}
            <h1>{mailExist}</h1>
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Registration;
