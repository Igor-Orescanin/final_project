import React from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import NavbarSec from "../../Nav/NavbarSec.js";
import useStyles from "./Styles.js";

// material-ui
import { Container, ThemeProvider, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button"; //button
//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

import DeleteIcon from '@material-ui/icons/Delete';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';




function Light(props) {

    const classes = useStyles();
    const { history } = props;

    return (
        <>
            <StylesProvider injectFirst>

                <Container className={classes.container} >
                    <div className={classes.paper}>

                        <Typography className={classes.heading} variant="h4" component="h4">
                            Your Controls </Typography>

                        <div className={classes.buttons}>
                        
                         <div className={classes.buttonRow}>
                         <WbIncandescentIcon className={classes.bulbIcon}/>
                                 <Button
                                //onClick={() => history.push("/lightone")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'>Light 1
                           
                                </Button>
                               <DeleteIcon className={classes.deleteIcon} /> 
                          </div>
                      
                            
                          <div className={classes.buttonRow}>
                          <EmojiObjectsIcon className={classes.bulbIcon}/>
                                 <Button
                                //onClick={() => history.push("/lightone")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'>Light 2
                           
                                </Button>
                               <DeleteIcon className={classes.deleteIcon} /> 
                          </div>

                          <div className={classes.buttonRow}>
                          <WbIncandescentIcon className={classes.bulbIcon}/>
                                 <Button
                                //onClick={() => history.push("/lightone")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'>Light 3
                           
                                </Button>
                               <DeleteIcon className={classes.deleteIcon} /> 
                          </div>

                            <Button
                                //onClick={() => history.push("/lightthree")}
                                className={classes.addLight}
                                variant="contained"
                                color="primary"
                                type='submit'
                            >Add New Light</Button>

                        </div>


                        <div className={classes.footer}></div>
                    </div>
                </Container>


            </StylesProvider >
        </>
    )
}

export default Light
