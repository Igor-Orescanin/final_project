// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import api from '../axios';

// react-router-dom
import { BrowserRouter, Link, Route } from "react-router-dom";

import "../../App.css";
import { useHistory } from "react-router-dom";




//styles
import { Container, ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography"; //Typography
import Paper from "@material-ui/core/Paper/index"
import Button from "@material-ui/core/Button"; //button
import Avatar from "@material-ui/core/Avatar"; //avatar
import TextField from "@material-ui/core/TextField";
//import Link from '@material-ui/core/Link'; // NOT work course of  Link from react-router-dom same name


//styles to use the connection
import useStyles from './styles.js'

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


const Registration = () => {

    //const [token, setToken] = useState();

    const history = useHistory();
    const classes = useStyles();

    /*   if (!token) {
          return <Registration setToken={setToken} />
      } */

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        macAddress: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        api({
            'method': 'POST',
            'url':'/registration',
            'data': formData,
            'headers': { 'content-type':'application/json' // override instance defaults
            },
            })
            console.log('This is our form data: ', formData);
    }





    return (

        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <Container className={classes.container}>
                    <div className={classes.paper}>
                        <Typography className={classes.typography} component="h1" variant="h5">
                            Registration
                 </Typography>

                        <Avatar className={classes.avatar} />
                        <form className={classes.form} noValidate onSubmit={handleSubmit}>
                            <TextField
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                className={classes.inputField}
                                variant="outlined"
                                required
                                id="username"
                                label="Name"
                                name="username"
                                size="small"
                                InputLabelProps={{
                                    style: { color: '#007982' },
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.root,
                                        focused: classes.focused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}


                            // value={postData.email}
                            // onChange={(e) => setPostData({...postData, email : e.target.value})}
                            />

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
                                    style: { color: '#007982' },
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.root,
                                        focused: classes.focused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}


                            // value={postData.email}
                            // onChange={(e) => setPostData({...postData, email : e.target.value})}
                            />


                            <TextField
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className={`${classes.inputField} ${classes.myInputLabel}`}
                                required
                                id="password"
                                label="Password"
                                variant="outlined"
                                name="password"
                                type='password'
                                size="small"
                                BorderColor="red"
                                InputLabelProps={{
                                    style: { color: '#007982' },
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.root,
                                        focused: classes.focused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            //value={postData.password}
                            // onChange={(e) => setPostData({...postData, password : e.target.value})}
                            />

                            <TextField
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                className={`${classes.inputField} ${classes.myInputLabel}`}
                                required
                                id="confirmPassword"
                                label="Confirm Password"
                                variant="outlined"
                                name="confirmPassword"
                                type='password'
                                size="small"
                                BorderColor="red"
                                InputLabelProps={{
                                    style: { color: '#007982' },
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.root,
                                        focused: classes.focused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            //value={postData.password}
                            // onChange={(e) => setPostData({...postData, password : e.target.value})}
                            />

                            <TextField
                                onChange={(e) => setFormData({ ...formData, macAddress: e.target.value })}

                                className={`${classes.inputField} ${classes.myInputLabel}`}
                                required
                                id="macAddress"
                                label="RPI-Mac-Address"
                                variant="outlined"
                                name="macAddress"
                                size="small"
                                BorderColor="red"
                                InputLabelProps={{
                                    style: { color: '#007982' },
                                }}
                                InputProps={{
                                    classes: {
                                        root: classes.root,
                                        focused: classes.focused,
                                        notchedOutline: classes.notchedOutline
                                    }
                                }}
                            //value={postData.password}
                            // onChange={(e) => setPostData({...postData, password : e.target.value})}
                            />


                            <Button className={classes.button}
                                type='submit'
                                className={classes.button}
                                variant="contained"
                                color="primary" >
                                Register Now
                    </Button>

                            <div className={classes.backgr}></div>
                        </form>
                    </div>
                </Container>
            </ThemeProvider>
        </StylesProvider>

    );
};

export default Registration;
