// react
import React from "react";

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


//__________________________________________________________start


const Navbar = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();

  const username = props.username;

  const isChart = location.pathname.includes('water');

  const isFixed = location.pathname.includes('water') || location.pathname.includes('weekly') || location.pathname.includes('monthly') || location.pathname.includes('imprint')|| location.pathname.includes('privacy')|| location.pathname.includes('conditions');

  const logout = (e) => {
    e.preventDefault();
    localStorage.setItem("token", undefined);
    history.push({
      pathname: "/Logout"
    })

  }

  return (

    <Container
      className={isFixed ? `${classes.navContainer}  ${classes.fixed}` : `${classes.navContainer}`}>
      <div className={classes.secondaryNav}>

        <Typography
          className={`${classes.typo} ${classes.nameOfUser}`}
        >
          Hello {username}
        </Typography>


        <IconButton
          className={classes.iconButton}
          onClick={() => history.push({
            pathname: "/setting",
            state: { userId: props.userId, user: props.username },
          })
          }
        >
          <SettingsIcon className={classes.icon} />
        </IconButton>
      </div>

      <div className={classes.primaryNav}>
        <IconButton
          className={`${classes.iconButtonSec} ${classes.iconHome}`}
          onClick={() => history.push("/hubs")}
        >
          <HomeIcon className={`${classes.icon}`}></HomeIcon>
        </IconButton>

        {isChart && <IconButton
          className={classes.iconButtonSec}
          onClick={() => history.push("/weekly")}
        >
          <AssessmentIcon className={classes.iconSec} />
          <Typography className={classes.charts}>
            Charts
            </Typography>
        </IconButton>}

        <IconButton
          className={classes.iconButtonSec}
          onClick={logout}
        >
          <Typography className={classes.logOut}>
            Log Out
            </Typography>
        </IconButton>
      </div>
    </Container>

  );
};

export default Navbar;
