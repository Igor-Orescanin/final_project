// general
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  '@global':{
    '.MuiIconButton-root':{
      padding:'12px, 0px'
    },
  },
  
  navContainer: {
    margin: "0px",
    padding: "0px",
    backgroundColor: "#30D4DE",
    borderBottom: "4px solid #0C9EB5",
  },

  secondaryNav: {
    borderBottom: "2px solid #0C9EB5",
    display: "flex",
    justifyContent: "space-between",
  },

  iconButton: {
    display: "flex",
    justifyContent: "space-between",
  },

  iconButtonSec: {
    display: "flex",
    justifyContent: "space-between",
    padding: '12px, 0px',
  },

  hand: {
    padding: "12px",
    cursor: "default",
  },

  icon: {
    marginLeft: "25px",
    marginRight: "25px",
    //color:'#00A2AC',
  },

  iconSec: {
    marginLeft: "25px",
  },

  iconHome: {
   // marginRight: "50px",
  },

  typo: {
    marginLeft: "25px",
    marginRight: "25px",
    fontSize: "15px",
    fontWeight: 700,
    color: "#ffffff",
  },
  typo2: {
    
    marginRight: "37px",
    fontSize: "15px",
    fontWeight: 700,
    color: "#ffffff",
  },

  typoSec: {
    marginRight: "25px",
    fontSize: "15px",
    fontWeight: 700,
    color: "#ffffff",
  },

  primaryNav: {
    display: "flex",
    justifyContent: "space-between",
   
  },
  
}));
