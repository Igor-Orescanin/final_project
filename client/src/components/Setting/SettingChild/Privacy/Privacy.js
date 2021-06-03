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
          <Typography className={classes.heading}>Privacy </Typography>

          <Typography className={classes.heading2}>
            General information
          </Typography>
          <br />
          <div className={classes.paper}>
            <Typography className={classes.typo}>
              The following information provides a simple overview of what
              happens to your personal data when you visit our website. Personal
              data are all data with which you can be personally identified.
              Detailed information on the subject of data protection can be
              found in our data protection declaration listed below this text.
            </Typography>
            <br />
            <Typography className={classes.typo2}>
            Data collection on our app: <br />
            </Typography>
            <Typography className={classes.typo2}>
            Who is responsible for data collection on this app?
            </Typography><br />
            <Typography className={classes.typo}>
            The data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this app.
            </Typography><br />
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Privacy;
