// general
import { makeStyles } from "@material-ui/core/styles";

// background picture
import image from "../../image/background_mobile.svg";


export default makeStyles((theme) => ({


  "palette":{
    "primary":{"light":"rgba(24, 176, 195, 1)",
    "main":"rgba(12, 158, 181, 1)",
    "dark":"rgba(0, 140, 167, 1)",
    "contrastText":"#fff"},},


  welcome: {
    display: "flex",
   // backgroundColor: "Red",
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: 'center',
    height:"65vh",
  },

  welcomeBtn: {
    backgroundColor: "#0C9EB5",
    margin: '20px'
  },

  buttonWel: {
    marginTop: "140px",
    width: "80px",
    height: "31px",
    borderRadius: "5px",
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    paddingLeft: "50px",
    paddingRight: "50px",
    backgroundColor: "#0C9EB5",
    color: "white",
    fontSize: "15px",
  },


  footer:{
    position:'fixed',
    bottom: '0px',
    height:'190px',
    //height:'170px',
    width:'100vw',
    //backgroundColor: "Blue",
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
   
  },

  background: {
    backgroundImage: `url(${image})`,
  },
}));
