// react
import React, { useEffect } from "react";

//styles to use the connection
import useStyles from "./styles";

// material-ui styles
import { Container, Button, ThemeProvider } from "@material-ui/core";
// import { StylesProvider } from "@material-ui/core/styles";

// to connect the routes
import { useHistory } from "react-router-dom";

//css
import "../../App.css";

import Navbar from "../Nav/Navbar";

// material-ui

//change color as a theme
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

function Setting(props) {
  const classes = useStyles();

  const { history } = props;

  return (
    <>
      <Navbar username={props.username}> </Navbar>
      <ThemeProvider theme={theme}>

        <Container className={classes.container}>

                <Button
                onClick={() => history.push("/conditions")}
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Conditions
              </Button>

              <Button
                onClick={() => history.push("/privacy")}
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Privacy
              </Button>

              <Button
                onClick={() => history.push("/imprint")}
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Impressum
              </Button>

            <div className={classes.footer}></div>

        </Container>
      </ThemeProvider>
    </>
  );
}

export default Setting;
