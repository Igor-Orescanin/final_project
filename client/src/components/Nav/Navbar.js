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

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   userID : data._id,
  //   userName: data.userName 
  // });

  // console.log(formData);

  return (
   // {userName = userId ? (''):(<dv></dv>)},
    <Container className={classes.navContainer}>
      <div className={classes.secondaryNav}>
        <Typography
          variant="h6"
          component="h6"
          className={`${classes.typo} ${classes.hand}`}
        >
          Hello Sandeep
        {/*{formData.userName} */}
        </Typography>

        <IconButton
          className={classes.iconButton}
          onClick={() => history.push("/setting")}
        >
          <SettingsIcon className={classes.icon} />
        </IconButton>
      </div>

      <div className={classes.primaryNav}>
        <IconButton
          className={`${classes.iconButtonSec}`}
          onClick={() => history.push("/devices")}
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
