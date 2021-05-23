import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from "./styles.js";
import { Container,   ThemeProvider, Typography, TextField, Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { borders } from '@material-ui/system';

// style
import { StylesProvider } from "@material-ui/core/styles";


//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

// theme
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
        

<StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
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
                           
                            InputProps={{
                                classes: {
                                  root: classes.root,
                                  focused: classes.focused,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }}
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
        </ThemeProvider>
    </StylesProvider>
    )
}

export default EmailAlert