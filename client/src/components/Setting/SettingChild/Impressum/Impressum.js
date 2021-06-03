import React from "react";
import useStyles from "./Styles.js";
import { Container, ThemeProvider, Typography } from "@material-ui/core";

import Navbar from "../../../Nav/Navbar.js";

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
        <Container className={classes.container}>
          <Typography className={classes.heading}>Imprint </Typography>

          <Typography className={classes.heading2}>
            According to § 5 TMG:
          </Typography>
          <br />
          <div className={classes.paper}>
            <Typography className={classes.heading3}>
              Naunet GmbH <br />
            </Typography>
            <Typography className={classes.typo}>
              Muster Str. 123, <br />
              12307 Hamburg, <br />
              Germany <br />
            </Typography>
            <br />
            <Typography className={classes.typo2}>
              Represented by: <br />
            </Typography>
            <Typography className={classes.typo}>
              Igor Oreščanin, <br />
              Marika Hasse, <br />
              Maritza Ochoa Roman, <br />
              Sandeep Kumar <br />
            </Typography>
            <br />
            <Typography className={classes.typo2}>
              Contakt: <br />
            </Typography>
            <Typography className={classes.typo}>
              Phone: +49 (0)40 00000000 <br />
              E-Mail: Naunet.@com <br />
            </Typography>
            <br />
            <Typography className={classes.typo2}>
              Registration: <br />
            </Typography>
            <Typography className={classes.typo}>
              Registration in the commercial register. <br />
              Register court: Not Now <br />
              Register number: HRH 00000 HL <br />
            </Typography>
            <br />
            <Typography className={classes.typo2}>
              Value added tax: <br />
            </Typography>
            <Typography className={classes.typo}>
              VAT number: DE000000000
              <br />
            </Typography>
            <br />
            <Typography className={classes.typo2}>
              Dispute settlement
              <br />
            </Typography>
            <Typography className={classes.typo}>
              We are neither willing nor obliged to participate in dispute
              settlement proceedings before a consumer arbitration board.
            </Typography>
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Privacy;
