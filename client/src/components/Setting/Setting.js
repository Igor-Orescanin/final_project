// react
import React,{useEffect, useState}from "react";


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

        <Container>
        {/* <Button
        onClick={() => history.push("/welcome")}
        className={classes.button}
        variant="contained"
        color="primary"
        >
        Sign-In something else
      </Button>  */}
      </Container>
      </>
      );
};

export default Setting;