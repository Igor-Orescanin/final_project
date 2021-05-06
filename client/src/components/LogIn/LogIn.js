// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import * as api from '../../api'

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

  const [formData, setFormData] = useState({
    email: "",
    password: ""
})
  
  const [loginStatus, setLoginStatus] = useState('')
  const history = useHistory();
  const classes = useStyles();



const handleSubmit = (e) => {
  e.preventDefault();
  api.loginUser(formData)
  .then(response =>{
    if(!response.data.auth){
      console.log(response.data)
      setLoginStatus('Wrong password or email')
    } else {
      localStorage.setItem('token', response.data.token)
      history.push("/adddevice");
    }
  }).catch(err => {
    console.log(err)
  })
}

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
            <form className={classes.form} noValidate onSubmit={handleSubmit} >
            <h2>{loginStatus}</h2>
              <TextField
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
              />
              <div className={classes.link} >
                <Link className={classes.link} href="#" variant="body2">
                  Forgot password
                </Link>
                <Link className={classes.link} onClick={() => history.push("/registration")} variant="body2">
                  Registration
                </Link>
              </div>
              <Button
                className={classes.button}
                type='submit'
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
