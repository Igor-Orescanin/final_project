// react
import React, { useState, useEffect } from "react";

// useStyles to use the connection
import useStyles from "./styles";

// to connect the routes
import { useHistory } from "react-router-dom";

// material-ui styles
import { Container, Typography, IconButton } from "@material-ui/core";

//icons
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";

//--------------------------------------start

const Navbar = (props) => {
  const history = useHistory();
  const classes = useStyles();

  console.log(props);

  const username = props.username;
  const userId = props.userId;

useEffect(() => {
  console.log(username, userId)
  }
, [])
  

  return (
    <Container className={classes.navContainer}>
      <div className={classes.secondaryNav}>
        <Typography
          variant="h6"
          component="h6"
          className={`${classes.typo} ${classes.hand}`}
        >
          Hello {props.username}
        </Typography>

        <IconButton
          className={classes.iconButton}
          onClick={() =>
          
            history.push({
              pathname: "/setting",
              state: {userId :userId, username:username},
            })
          }
        >
          <SettingsIcon className={classes.icon} />
        </IconButton>
      </div>

      <div className={classes.primaryNav}>
        <IconButton
          className={`${classes.iconButtonSec}`}
          onClick={() => 
           
            history.push({
            pathname: "/devices",
            state: {userId :userId, username:username},
          })}
        >
          <HomeIcon className={`${classes.icon}`}></HomeIcon>
        </IconButton>

        <IconButton
          className={classes.iconButtonSec}
          onClick={() => history.push("/logout")}
        >
          <Typography variant="h6" component="h6" className={classes.typo2}>
            Log Out
          </Typography>
        </IconButton>
      </div>
    </Container>
  );
};

export default Navbar;
