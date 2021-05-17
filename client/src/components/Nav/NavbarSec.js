// react
import React, { useState, useEffect } from "react";

// useStyles to use the connection
import useStyles from "./styles";

// to connect the routes
import { useHistory, useLocation } from "react-router-dom";

// material-ui styles
import { Container, Typography, IconButton } from "@material-ui/core";

//icons
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import AssessmentIcon from "@material-ui/icons/Assessment";


//--------------------------------------start


const NavbarSec = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();


  const username = props.username;
  

  const isChart = location.pathname.includes('water');
  // const userName = props.location.state.userName


  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   userID : data._id,
  //   userName: data.userName 
  // });

  // console.log(formData);






  return (
    <Container className={classes.navContainer}>
      <div className={classes.secondaryNav}>

        <Typography
          variant="h6"
          component="h6"
          className={`${classes.typo} ${classes.hand}`}
        >

          Hello {username} 
        </Typography>
       

        <IconButton
          className={classes.iconButton}
          onClick={() =>   history.push({
            pathname: "/setting",
            state: {userId : props.userId, user: props.username},
          })
        }
        >
          <SettingsIcon className={classes.icon} />
        </IconButton>
      </div>

      <div className={classes.primaryNav}>
        <IconButton
          className={`${classes.iconButtonSec} ${classes.iconHome}`}
          onClick={() => history.push("/devices")}
        >
          <HomeIcon className={`${classes.icon}`}></HomeIcon>
        </IconButton>

        {isChart && <IconButton
          className={classes.iconButtonSec}
          onClick={() => history.push("/weekly")}
        >
          <AssessmentIcon className={classes.iconSec} />
          <Typography variant="h6" component="h6" className={classes.typoSec}>
            Charts
          </Typography>
        </IconButton>}

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

export default NavbarSec;
