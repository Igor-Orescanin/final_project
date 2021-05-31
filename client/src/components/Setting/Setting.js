
// react
import React, { useEffect, useState } from "react";


//styles to use the connection
import useStyles from "./styles";

//css
import '../../App.css';


import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";





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
                                onClick={() => history.push("/conditions")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'>Conditions</Button>

                            <Button
                                onClick={() => history.push("/privacy")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'
                            >Privacy</Button>

                            <Button
                                onClick={() => history.push("/impressum")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'
                            >Impressum</Button>

                        </div>


                        <div className={classes.footer}></div>
                    </div>
                </Container>


            </StylesProvider>
        </>
    )
}

export default Light
