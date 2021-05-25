import React from 'react';
import useStyles from './Styles';
import { StylesProvider } from "@material-ui/core/styles";

//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";
import { Container, ThemeProvider, Paper, Typography, TextField } from '@material-ui/core';
import Button from "@material-ui/core/Button";


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

function AddControl(props) {

    const classes = useStyles();

    return (
        <>
        <ThemeProvider theme={theme}>
        <Container className={classes.container}>

            <Typography className={classes.heading} variant="p" component="p">
                You don't have any Controls <br /> registered in the System </Typography>

            <Paper className={classes.gpioheading}>
                Choose a proper GPIO pin
                </Paper>

            <Paper className={classes.gpiocontainer}>
                <p>17</p>
                <p>20</p>
                <p>23</p>
                <p>27</p>

            </Paper>

            <Typography className={classes.form} variant="p" component="p"> Name
                <form className={classes.formField} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="" variant="outlined" margin="dense" />
                </form>
            </Typography>

            <Typography className={classes.form} variant="p" component="p"> GPIO
                <form className={classes.formField} noValidate autoComplete="off">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        margin="dense"
                    />
                </form>
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

</ThemeProvider>
    </>
    )
}

export default AddControl
