import React from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import NavbarSec from "../Nav/NavbarSec.js";
import useStyles from "./styles.js";

// material-ui
import { Container, ThemeProvider, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button"; //button
//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";


function Light(props) {

    const classes = useStyles();
    const { history } = props;

    return (
        <>
            <StylesProvider injectFirst>

                <NavbarSec />
                <Container className={classes.container} >
                <h1 className={classes.heading}>Setting</h1>
                    <div className={classes.paper}>

                        <div className={classes.buttons}>
                            <Button
                                onClick={() => history.push("/emailalert")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'>E-mail Alert</Button>

                            <Button
                                onClick={() => history.push("/")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'
                            >Add Light</Button>

                            <Button
                                onClick={() => history.push("/")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'
                            >Light Control</Button>

                        </div>


                        <div className={classes.footer}></div>
                    </div>
                </Container>


            </StylesProvider >
        </>
    )
}

export default Light
