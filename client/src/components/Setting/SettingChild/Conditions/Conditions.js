import React from "react";
import useStyles from "./Styles.js";
import { Container, ThemeProvider, Typography } from "@material-ui/core";

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

function Conditions(props) {
  const classes = useStyles();

  return (
    <>
      <Navbar username={props.username}> </Navbar>

      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <Typography className={classes.heading}>
            Terms & Conditions
          </Typography>
        
          <Typography className={classes.heading2}>
          Standard Terms and Conditions 
          </Typography>
          <br />
          <div className={classes.paper}>
          <Typography className={classes.typo2}>
          § 1 Scope of Standard Terms and Conditions for Services
          </Typography>
          <br />
          <Typography className={classes.typo}>
          1. The following general terms and conditions for services apply to the use of the Naunet app.
          </Typography>
          <br />
          <Typography className={classes.typo}>
          2. Naunet only offers its services to consumers.
          </Typography>
          <br />
          <Typography className={classes.typo}>
          3. These standard terms and conditions for services shall also apply to all future legal relationships between Naunet and the Costumer. Any terms and conditions of the Costumers shall apply only upon express prior written agreement. 
          </Typography>
          </div>
        
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Conditions;
