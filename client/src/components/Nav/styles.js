// general
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  // change default syles on root
  "@global": {
    ".MuiIconButton-root": {
      padding: "12px, 0px",
    },
  },
  //container
  navContainer: {
    margin: "0px",
    padding: "0px",
    backgroundColor: "#30D4DE",
    borderBottom: "4px solid #0C9EB5",
  },

  fixed: {
    position: "fixed",
    zIndex: "1",


  },
  //div with name and settingIcon
  secondaryNav: {
    borderBottom: "2px solid #0C9EB5",
    display: "flex",
    justifyContent: "space-between",
  },

  // other div with name and settingIcon
  primaryNav: {
    display: "flex",
    justifyContent: "space-between",
  },

  // nice backgroud hover for the icons
  iconButton: {
    display: "flex",
    justifyContent: "space-between",
  },
  // nice backgroud hover for the icons
  iconButtonSec: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px, 0px",
  },
  // cursor that you can't touch
  hand: {
    padding: "12px",
    cursor: "default",
  },
  //icon
  icon: {
    marginLeft: "25px",
    marginRight: "25px",
    //color:'#00A2AC',
  },
  //icon chart icon
  iconSec: {
    marginLeft: "25px",

  
  },

  //typography on name
  typo: {
    marginLeft: "25px",
    marginRight: "25px",
    fontSize: "15px",
    fontWeight: 700,
    color: "#ffffff",
  },

  //typography on Logout
  typo2: {
    marginLeft: "3px",
    marginRight: "25px",
    fontSize: "15px",
    fontWeight: 700,
    color: "#ffffff",
  },

  //typography on chart
  typoSec: {
    marginRight: "25px",
    fontSize: "15px",
    fontWeight: 700,
    color: "#ffffff",
  },
}));
