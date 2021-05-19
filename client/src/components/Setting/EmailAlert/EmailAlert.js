import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from "./styles.js";
import { Container, ThemeProvider, Typography, TextField, Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { borders } from '@material-ui/system';


function EmailAlert() {

    const classes = useStyles();
    const [freshWater, setFreshWater] = useState('');
    const [grayWater, setGrayWater] = useState('');

    const handleChangeFresh = (event) => {
        setFreshWater(event.target.value);
    };

    const handleChangeGray = (event) => {
        setGrayWater(event.target.value);
    };

    return (
        <div>

            <Container className={classes.container} >

                <Typography className={classes.heading} variant="h4" component="h4">
                    Set % for an Alert Email </Typography>

                <Typography className={classes.waterDiv} variant="h5" component="h5">
                    Fresh Water

                <FormControl variant="outlined" className={classes.formControl}>


                        <InputLabel id="demo-simple-select-outlined-label">Water in %</InputLabel>
                        <Select
                            className={classes.selectDiv}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={freshWater}
                            onChange={handleChangeFresh}
                            label="freshWater"
                            borderColor="secondary.main"
                        // InputProps={{
                        //     classes: {
                        //         root: classes.root,
                        //         focused: classes.focused,
                        //         notchedOutline: classes.notchedOutline,
                        //     },
                        // }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>10%</MenuItem>
                            <MenuItem value={25}>25%</MenuItem>
                            <MenuItem value={40}>40%</MenuItem>
                        </Select>
                    </FormControl>
                </Typography>


                <Typography className={classes.waterDiv} variant="h5" component="h5">
                    Gray Water

                <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Water in %</InputLabel>
                        <Select
                            className={classes.selectDiv}
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={grayWater}
                            onChange={handleChangeGray}
                            label="grayWater"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={50}>50%</MenuItem>
                            <MenuItem value={70}>70%</MenuItem>
                            <MenuItem value={85}>85%</MenuItem>
                        </Select>
                    </FormControl>
                </Typography>

                <Button
                    //onClick={() => history.push("/")}
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type='submit'
                >Save</Button>


                <div className={classes.footer}></div>
            </Container>

        </div>
    )
}

export default EmailAlert
















/* import React, { useState } from 'react';
import { StylesProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import NavbarSec from "../../Nav/NavbarSec.js";
import useStyles from "./styles.js";

// material-ui
import { Container, ThemeProvider, Typography, TextField, Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button"; //button
//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuList from '@material-ui/core/MenuList';



function EmailAlert(props) {

    const classes = useStyles();
    const { history } = props;

    const [freshWater, setFreshWater] = useState('');
    const [grayWater, setGrayWater] = useState('');

    const handleChange = (event) => {
        //setFreshWater(event.target.value);
        setGrayWater(event.target.value);
    };

    return (
        <>
            <StylesProvider injectFirst>

                <Container className={classes.container} >

                    <h4>Set your own % for an Alert to your Email</h4>


                    <div className={classes.divContainer}>
                        <h3>Fresh Water</h3>
                        <FormControl variant="outlined" className={classes.formControl}>

                            <InputLabel direction="column" >%</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={freshWater}
                                onChange={handleChange}
                                label="%"
                            >

                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>10%</MenuItem>
                                <MenuItem value={20}>20%</MenuItem>
                                <MenuItem value={30}>30%</MenuItem>

                            </Select>

                        </FormControl>
                    </div>

                    <div className={classes.divContainer}>
                        <h3>Gray Water</h3>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">%</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={grayWater}
                                onChange={handleChange}
                                className={classes.selectEmpty}
                                label="%"
                            >

                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>10%</MenuItem>
                                <MenuItem value={20}>20%</MenuItem>
                                <MenuItem value={30}>30%</MenuItem>





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


                    <div className={classes.footer}></div>

                </Container>


            </StylesProvider >
        </>
    )
}

export default EmailAlert */