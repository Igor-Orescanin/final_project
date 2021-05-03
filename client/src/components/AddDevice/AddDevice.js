// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import api from '../axios';

//connection
import NavbarSec from "../Nav/NavbarSec.js";


import { useHistory } from "react-router-dom";

//css
import '../../App.css';

// material-ui
import { Container,ThemeProvider,Typography,TextField  } from "@material-ui/core";
import Button from "@material-ui/core/Button"; //button

//styles to use the connection
import useStyles from "./styles";

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

const AddDevice = (props) => { 
    const { history } = props;
    const classes = useStyles();


    const [formData, setFormData] = useState({
        deviceName: "",
        deviceId: ""
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        api({
            'method': 'POST',
            'url':'/adddevice',
            'data': formData,
            'headers': { 'content-type':'application/json' // override instance defaults
            },
            })
            console.log('This is our form data: ', formData);
            history.push("/water");
    }


  
    return (
      <> 
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>

            <NavbarSec />
                <Container className={classes.container} >
                    <div className={classes.paper}>
                    <Typography className={classes.typography}>You don't have any devices
registered in this system! </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                className={`${classes.inputField} ${classes.myInputLabel}`}
                                required
                                id="deviceName"
                                label="Device Name"
                                variant="outlined"
                                name="deviceName"
                                type='text'
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
                                }}   />

                                <TextField
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                className={`${classes.inputField} ${classes.myInputLabel}`}
                                required
                                id="deviceId"
                                label="Device Id"
                                variant="outlined"
                                name="deviceId"
                                type='text'
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
                                }}   />



    
        <Button
        onClick={() => history.push("/device")}
        className={classes.button}
        variant="contained"
        color="primary"
        >
        Register
      </Button> 
      <div className={classes.backgr}></div>
      </form >
      </div>
      </Container>

      </ThemeProvider>
      </StylesProvider >
      </>
      );
};

export default AddDevice;