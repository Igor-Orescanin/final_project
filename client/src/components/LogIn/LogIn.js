// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";

// react-router-dom
import { BrowserRouter, Link, Route } from "react-router-dom";

//styles to use the connection
import useStyles from "./styles";

//styles
import { Container, ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography"; //Typography
import Paper from "@material-ui/core/Paper/index";
import Button from "@material-ui/core/Button"; //button
import Avatar from "@material-ui/core/Avatar"; //avatar
import TextField from "@material-ui/core/TextField";
//import Link from '@material-ui/core/Link'; // NOT work course of  Link from react-router-dom same name

import "../../App.css";
import { useHistory } from "react-router-dom";

//useState react hook method returns = function of the hook setPostDate and = postData = e.target.value
// const [postData, setPostData] = useState({
//     email:'',
//     password:'',

// })

// to connect the routes
//

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

const LogIn = () => {

  

  const history = useHistory();
  const classes = useStyles();

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
            <form className={classes.form} noValidate>
              <TextField
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
                // value={postData.email}
                // onChange={(e) => setPostData({...postData, email : e.target.value})}
              />
              <TextField
                className={`${classes.inputField} ${classes.myInputLabel}`}
                required
                id="password"
                label="Password"
                variant="outlined"
                name="password"
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
                //value={postData.password}
                // onChange={(e) => setPostData({...postData, password : e.target.value})}
              />
              <div className={classes.link} >
                <Link className={classes.link} href="#" variant="body2">
                  Forgot password
                </Link>
                <Link className={classes.link}  onClick={() => history.push("/registration")}variant="body2">
                  Registration
                </Link>
              </div>
              <Button
                className={classes.button}
                onClick={() => history.push("/device")}
                className={classes.button}
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
