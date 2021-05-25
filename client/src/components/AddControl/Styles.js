import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";

import image from "../../image/background_mobile.svg";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: '#30D4DE',
    fontFamily: ("Roboto", "sans-serif"),
    height: '60vh',
  },

  heading: {
    fontSize: '20px',
    fontWeight: '900',
    marginBottom: '30px',
    color: '#007A8B'
  },

  gpioheading: {
    backgroundColor: '#0C9EB5',
    fontFamily: ("Roboto", "sans-serif"),
    padding: '8px',
    color: 'white',
    borderRadius: '5px'
  },

  gpiocontainer: {
    fontFamily: ("Roboto", "sans-serif"),
    color: '008CA7',
    border: '2px solid #008CA7',
    padding: '20px 120px',
    marginTop: '-20px',
    zIndex: '-2',
    borderRadius: '5px'
  },




  form: {
    marginTop: "5px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    fontFamily: ("Roboto", "sans-serif"),
    color: '#0C9EB5',
    width: '230px'
  },

  formField: {
    marginLeft: '30px',
   
  },
  
  root: {
    "&:hover $notchedOutline": {
      bordercolor: "#007982",
    },
    "&$focused $notchedOutline": {
      bordercolor: "#007982",
    },
  },
  focused: {},
  notchedOutline: {},

  notchedOutline: {
    bordercolor: "#007982",
  },
  inputField: {
    marginTop: "20px",
    bordercolor: "#007982",
    width: "212px",
    backgroundColor: "white"
  },




  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
    padding: 0,
    backgroundColor: "white",
    color: '#0C9EB5',
    width: '115px',
    height: '38px',
    border: '1px solid #0C9EB5',
    borderRadius: '10px',
    fontSize: '15px',
    marginTop: '20px',

  },

  //for the Image on the bottom
  footer: {
    zIndex: "-1",
    position: "fixed",
    bottom: "0px",
    height: "190px",
    width: "100vw",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
