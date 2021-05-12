// react
import React from "react";

// style
import { StylesProvider } from "@material-ui/core/styles";


//styles to use the connection
import useStyles from "./styles";

//css
import '../../App.css';

// material-ui
import { Container,Typography,Button,ThemeProvider } from "@material-ui/core";


// change color as a theme
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





const LogOut = (props) => { 
    const { history } = props;
    const classes = useStyles();
  
    return (
       
      <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
        <div className={classes.top}></div>
          <div className={classes.paper}>
            <Typography
              className={classes.typography}
              component="h1"
              variant="h5"
            >
              Have a nice Day and see you again on NaunetMon
            </Typography>
        
        <Button
        onClick={() => history.push("/")}
        className={classes.button}
        variant="contained"
        color="primary"
        >
        Login again
      </Button> 
      </div>
      <div className={classes.footer}></div>
      </Container>
      </ThemeProvider>
    </StylesProvider>
      
  );
};

export default LogOut;