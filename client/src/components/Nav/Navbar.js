// react
import React, { useState } from "react";

// useStyles to use the connection
import useStyles from "./styles";

// to connect the routes
import { useHistory } from "react-router-dom";

// material-ui styles
import { Container, Typography, IconButton } from "@material-ui/core";

//icons
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";

const Navbar = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Container className={classes.navContainer}>
      <div className={classes.secondaryNav}>
       {/* <IconButton className={`${classes.iconButton} ${classes.hand}`}>     */}
          <Typography variant="h6" component="h6" className={`${classes.typo} ${classes.hand}`}>
          {/* <Typography variant="h6" component="h6" className={classes.typo}> */}
            Hello Sandeep
          </Typography>
         {/* </IconButton>  */}
        <IconButton
          className={classes.iconButton}
          onClick={() => history.push("/")}
        >
          <SettingsIcon className={classes.icon} />
        </IconButton>
      </div>
      <div className={classes.primaryNav}>
        <IconButton className={classes.iconButton}
         onClick={() => history.push("/")}
        >
          <HomeIcon className={classes.icon}></HomeIcon>
        </IconButton>
        <IconButton
          className={classes.iconButton}
          onClick={() => history.push("/logout")}
        >
          <Typography variant="h6" component="h6" className={classes.typo}>
            Log Out
          </Typography>
        </IconButton>
      </div>
    </Container>
  );
};

export default Navbar;
