// react
import React, { useState } from "react";

// react-router-dom
import { BrowserRouter, Link, Route } from "react-router-dom";

//styles to use the connection
import useStyles from "./styles";

//styles
import { Container} from "@material-ui/core";
import Typography from "@material-ui/core/Typography"; //Typography
import Paper from "@material-ui/core/Paper/index"
import Button from "@material-ui/core/Button"; //button
import Avatar from "@material-ui/core/Avatar"; //avatar
import TextField from "@material-ui/core/TextField";
//import Link from '@material-ui/core/Link'; // NOT work course of  Link from react-router-dom same name

import "../../App.css";


//useState react hook method returns = function of the hook setPostDate and = postData = e.target.value
// const [postData, setPostData] = useState({ 
//     email:'',
//     password:'',

// })

// to connect the routes
//
import { useHistory } from "react-router-dom";

const SignIn = () => {
    const history = useHistory();
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <div className={classes.paper}>
                <Typography className={classes.typography} component="h1" variant="h5">
                    Sign-In
                </Typography>
                
                <Avatar className={classes.avatar} />
                
            </div>
        </Paper>
    );
};

export default SignIn;
