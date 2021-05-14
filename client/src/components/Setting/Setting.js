// react
import React,{useEffect, useState}from "react";

//connection
import Navbar from "../Nav/Navbar.js";

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
    
    const username = props.location.state.username
    const userId =props.location.state.userId


    useEffect(() => {
      console.log(username, userId)
      }
    , [])

  console.log(username)
  
    return (
      <> 
        <Navbar username={username} userId={userId} />
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