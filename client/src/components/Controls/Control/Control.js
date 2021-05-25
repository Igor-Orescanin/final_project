// react
import React, { useState, useEffect } from "react";

import SvgIcon from "@material-ui/core/SvgIcon";
import LightOff from '../../../image/light_off.svg';
import LightOn from '../../../image/light_off.svg';

// axios
import * as api from "../../../api";

import { useHistory } from "react-router-dom";

//styles to use the connection
import useStyles from "./Styles";

import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import DeleteIcon from '@material-ui/icons/Delete';

//css
import "../../../App.css";

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
    FormControlLabel,
    Radio,
    Icon,
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

const Control = (props) => {
    // props.deviceObject.deviceId
    //for routes
    const history = useHistory();
    //const { history } = props;


    //for styles
    const classes = useStyles();


    const username = props.username

    console.log(props.username)


    const light = props.lightObject    // Marika is not sure if light or device
    console.log(light)
    //a hook 
    // const [light, setLight] = useState();


    //for dialogfeld
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };
    const handleClose1 = () => {
        setOpen(false);
        // api.deleteLight(light._id)      // Mari is not sure if light or device
    };

    //for radio button FormControlLabel
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const lightHandler = () => {

    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <Container className={classes.container}>
                    <div className={classes.groupButton}>
                        {/*  {light.status ? <CheckCircleOutlineIcon className={classes.checkIcon} /> : <NotInterestedIcon className={classes.noIcon} />} */}


                        <img width='25' height='25' src={LightOff}></img>

                        <Button
                            onClick={() => lightHandler()}


                            className={classes.button}
                            variant="contained"
                            color="primary"
                        //  value={light.gpio}
                        >
                            Device 1
                          {/*    {light.name}   Igor and GPIO */}

                        </Button>
                        <DeleteIcon className={classes.deleteIcon} onClick={handleClickOpen} />

                        <Dialog
                            className={classes.dialog}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {" Are you sure you want to delete 'this Light'?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Light will be disappear and is not connected anymore!
                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Disagree
                </Button>
                                <Button onClick={handleClose1} color="primary" autoFocus>
                                    Agree
                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Container>
            </ThemeProvider>
        </>
    );
};

export default Control;