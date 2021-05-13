// react
import React, { useState ,useEffect} from "react";

// useStyles to use the connection
import useStyles from "./styles";

// to connect the routes
import { useHistory } from "react-router-dom";

// material-ui styles
import { Container, Typography, IconButton } from "@material-ui/core";

//icons
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";




const Navbar = (props) => {
  const history = useHistory();
  const classes = useStyles();
console.log(props)

useEffect(() => {
  const user = props.data
  console.log(props)
}, [])


// if (!user){
//   return <div></div>
// }
 // const userName = props.location.state.userName
console.log(props.location)
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
           Hello {props.username} 
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
