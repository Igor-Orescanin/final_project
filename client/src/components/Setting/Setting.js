// react
import React from "react";

//connection
import NavbarSec from "../Nav/NavbarSec.js";

//styles to use the connection
import useStyles from "./styles";

//css
import '../../App.css';

// material-ui
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button"; //button

const Setting = (props) => { 
    const { history } = props;
    const classes = useStyles();
  
    return (
      <> 
        <NavbarSec />
        <Container>
        <Button
        onClick={() => history.push("/welcome")}
        className={classes.button}
        variant="contained"
        color="primary"
        >
        Sign-In something else
      </Button> 
      </Container>
      </>
      );
};

export default Setting;