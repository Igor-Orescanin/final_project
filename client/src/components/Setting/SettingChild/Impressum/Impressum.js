import React from 'react';
import useStyles from "./Styles.js";
import { Container, ThemeProvider, Typography, } from "@material-ui/core";

import Navbar from '../../../Nav/Navbar.js';

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

function Privacy(props) {

    const classes = useStyles();

    return (
        <>
         <Navbar username={props.username}> </Navbar>
            <ThemeProvider theme={theme}>
                <Container className={classes.container} >

                    <Typography className={classes.heading} variant="h1" component="h1">
                        Imprint </Typography>

                    <Typography className={classes.conditions} variant="h6" component="h6">
                        Naunet GmbH <br />
                        Address:<br />
                        <br />
                        Muster Str. 123,<br />
                        12345 Hamburg,<br />
                        Germany<br />
                        <br />
                        Managing Director: Igor Orescanin <br />
                        Co-Director:       Marika Hasse<br />
                        Employee:          Maritza , Sandeep<br />
                        <br />
                        Registration: HRB 123446 B, Hamburg<br />
                        <br />
                        VAT number: DE123456<br />
                        <br />
                        Telephone Sales: +49 123 456789<br />
                        <br />
                        Email: naunetmon@gmail.com<br />
                    </Typography>


                    <div className={classes.footer}></div>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Privacy
