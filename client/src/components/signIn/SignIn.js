// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles"; 

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

        <StylesProvider injectFirst>
        <Container className={classes.container}>
            <div className={classes.paper}>
                <Typography className={classes.typography} component="h1" variant="h5">
                    Sign-In
                 </Typography>
                
                <Avatar className={classes.avatar} />
                <form className={classes.form} noValidate>
                    <TextField
                        className={classes.inputField}
                        variant="outlined"
                        multiline
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        size="small"
                    // value={postData.email}   
                    // onChange={(e) => setPostData({...postData, email : e.target.value})} 
                    />
                    <TextField
                        className={classes.inputField}
                        required
                        id="password"
                        label="Password"
                        variant="outlined"
                        name="password"
                        size="small"
                    //value={postData.password}   
                    // onChange={(e) => setPostData({...postData, password : e.target.value})} 
                    />
                    <Link className={classes.link} href="#" variant="body2">
                        Forgot password
          </Link>

                    <Button className={classes.button}
                        onClick={() => history.push("/welcome")}
                        className={classes.button}
                        variant="contained"
                        color="primary" >
                        Sign-In
                    </Button>

                    <div className={classes.backgr}></div>
                </form>
                </div>
        </Container>
        </StylesProvider>

    );
};

export default SignIn;
