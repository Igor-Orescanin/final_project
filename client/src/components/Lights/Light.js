import React from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import NavbarSec from "../Nav/NavbarSec.js";
import useStyles from "./Styles.js";

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

                <Container className={classes.container} >
                    <div className={classes.paper}>

                        <div className={classes.buttons}>
                            <Button
                                onClick={() => history.push("/lightone")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'>Light 1</Button>

                            <Button
                                onClick={() => history.push("/lighttwo")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'
                            >Light 2</Button>

                            <Button
                                onClick={() => history.push("/lightthree")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'
                            >Light 3</Button>

                        </div>


                        <div className={classes.footer}></div>
                    </div>
                </Container>


            </StylesProvider >
        </>
    )
}

export default Light
