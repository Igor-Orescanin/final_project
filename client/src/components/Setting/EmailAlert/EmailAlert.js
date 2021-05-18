import React, {useState} from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import NavbarSec from "../../Nav/NavbarSec.js";
import useStyles from "./styles.js";

// material-ui
import { Container, ThemeProvider, Typography, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button"; //button
//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


function EmailAlert(props) {

    const classes = useStyles();
    const { history } = props;

    const [freshWater, setFreshWater] = useState('');
    const [grayWater, setGrayWater] = useState('');

  const handleChange = (event) => {
    setFreshWater(event.target.value);
    setGrayWater(event.target.value);
  };

    return (
        <>
            <StylesProvider injectFirst>

                <Container className={classes.container} >

                    <div className={classes.paper}>

                        <div>
                            <h4>Decide your % you want to get the alert!</h4>
                            <div className={classes.bothForm}>
                                <div> <span className={classes.formText}>Fresh Water</span> 

                                <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={freshWater}
                                            onChange={handleChange}
                                            label="freshWater"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>10%</MenuItem>
                                            <MenuItem value={25}>25%</MenuItem>
                                            <MenuItem value={50}>50%</MenuItem>
                                            <MenuItem value={70}>70%</MenuItem>
                                        </Select>
                                    </FormControl>


                                </div>
                                <div><span className={classes.formText}>Gray Water</span> 
                                
                                <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={grayWater}
                                            onChange={handleChange}
                                            label="grayWater"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>10%</MenuItem>
                                            <MenuItem value={25}>25%</MenuItem>
                                            <MenuItem value={50}>50%</MenuItem>
                                            <MenuItem value={70}>70%</MenuItem>
                                        </Select> 
                                    </FormControl>
                                </div>
                                  <Button
                                //onClick={() => history.push("/")}
                                className={classes.button}
                                variant="contained"
                                color="primary"
                                type='submit'
                            >Save</Button>
                            </div>
                          
                        </div>


                        <div className={classes.footer}></div>
                    </div>
                </Container>


            </StylesProvider >
        </>
    )
}

export default EmailAlert