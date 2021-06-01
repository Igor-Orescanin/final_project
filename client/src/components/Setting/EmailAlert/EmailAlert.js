import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from "./styles.js";
import { Container, ThemeProvider, Typography, TextField, Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import * as api from "../../../api/index";
import Navbar from '../../Nav/Navbar';

// style
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


function EmailAlert(props) {

    const {device} = props ;
    const deviceId = device._id;

    let cleanAlertThresholdProps = props.device.cleanAlertThreshold;
    let wasteAlertThresholdProps = props.device.wasteAlertThreshold

    const classes = useStyles();
    let [cleanAlertThreshold, setCleanAlertThreshold] = useState(cleanAlertThresholdProps);
    const [wasteAlertThreshold, setWasteAlertThreshold] = useState(wasteAlertThresholdProps);

    const handleChangeFresh = (event) => {
        setCleanAlertThreshold(event.target.value);
    };

    const handleChangeGray = (event) => {
        setWasteAlertThreshold(event.target.value);
    };


    const callApi = () => {
        console.log(cleanAlertThreshold, wasteAlertThreshold);

        api.updateEmailAlert(deviceId, { cleanAlertThreshold: cleanAlertThreshold, wasteAlertThreshold: wasteAlertThreshold }).then((res) => {
            console.log(res);
        })
    }



    return (
        <div>
            <Navbar username={props.username}> </Navbar>
            <ThemeProvider theme={theme}>
                <Container className={classes.container} >

                    <Typography className={classes.heading} variant="h6" component="h6">
                        Set Your own % for an Alert to your Email </Typography>

                    <Typography className={classes.headingSec} variant="h6" component="h6">
                        Choose the % for the Alert</Typography>

                    <Typography className={classes.waterDiv} variant="h5" component="h5">
                        Fresh Water

                <FormControl variant="outlined" className={classes.formControl}>

                            <InputLabel id="demo-simple-select-outlined-label">Water in %</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={cleanAlertThreshold}
                                onChange={handleChangeFresh}
                                label="freshWater"
                                InputProps={{
                                    classes: {
                                        root: classes.root,
                                        focused: classes.focused,
                                        notchedOutline: classes.notchedOutline,
                                    },
                                }}
                            >
                                <MenuItem value={0}>
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
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={wasteAlertThreshold}
                                onChange={handleChangeGray}
                                label="grayWater"
                                InputProps={{
                                    classes: {
                                        root: classes.root,
                                        focused: classes.focused,
                                        notchedOutline: classes.notchedOutline,
                                    },
                                }}
                            >
                                <MenuItem value={0}>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={50}>50%</MenuItem>
                                <MenuItem value={70}>70%</MenuItem>
                                <MenuItem value={85}>85%</MenuItem>
                            </Select>
                        </FormControl>
                    </Typography>

                    <Typography className={classes.notification} variant="h6" component="h6">
                        {cleanAlertThreshold === 0 && wasteAlertThreshold === 0 ? "Email alert disable" : "Notification goes to your Email"}
                    </Typography>

                    <Button
                        onClick={callApi}
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        type='submit'
                    >Save</Button>


                    <div className={classes.footer}></div>
                </Container>
            </ThemeProvider>
        </div>
    )
}

export default EmailAlert
