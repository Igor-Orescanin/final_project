// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";

import axios from 'axios';

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

//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";


// to connect the routes
//



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

    //useState react hook method returns = function of the hook setPostDate and = postData = e.target.value
    const [postData, setPostData] = useState({
        // fullName: '',
        username: '',
        // email: '',
        password: '',
        macAddress: ''
    })

    const submitHandler = () => {
        // e.preventDefault();

        const registered = {
            //fullName: postData.fullName,
            username: postData.username,
            //email: postData.email,
            password: postData.password,
            macAddress: postData.macAddress
        }

        axios.post('http://localhost:4000/registration', registered)
            .then(response => console.log(response.data));

        setPostData({
            // fullName: '',
            username: '',
            // email: '',
            password: '',
            macAddress: ''
        })


    }

    const history = useHistory();
    const classes = useStyles();

    return (

        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
            <Container className={classes.container}>
                <div className={classes.paper}>
                    <Typography className={classes.typography} component="h1" variant="h5">
                    Registration
                 </Typography>

                    <Avatar className={classes.avatar} />
                        <form className={classes.form} noValidate onSubmit={submitHandler()}>
                        <TextField
                            className={classes.inputField}
                            variant="outlined"
                            required
                            id="name"
                            label="Name"
                            name="name"
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
                                value={postData.username}
                                onChange={(e) => setPostData({ ...postData, username: e.target.value })}
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
                                style: { color: '#007982' },
                            }}
                            InputProps={{
                                classes: {
                                    root: classes.root,
                                    focused: classes.focused,
                                    notchedOutline: classes.notchedOutline
                                }
                            }}
                                value={postData.password}
                                onChange={(e) => setPostData({ ...postData, password: e.target.value })}
                        />
                         <TextField
                            className={`${classes.inputField} ${classes.myInputLabel}`}
                            required
                            id="rpi-mac-address"
                            label="RPI-Mac-Address"
                            variant="outlined"
                            name="rpi-mac-address"
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
                                value={postData.macAddress}
                                onChange={(e) => setPostData({ ...postData, macAddress: e.target.value })}
                        />


                        <Button className={classes.button}
                            onClick={() => history.push("/welcome")}
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