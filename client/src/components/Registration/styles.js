// general
import { makeStyles } from "@material-ui/core/styles";

// image background
import image from "../../image/welcome3_bg_mobile.svg";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
  },

  paper: {
    height: "65vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  typography: {
    marginTop: "64px",
    fontFamily: ("Roboto", "sans-serif"),
    color: "#007982",
    fontSize: "24px",
    fontWeight: "bold",
  },

  avatar: {
    marginTop: "20px",
    backgroundColor: "#007982",
    alignContent: "center",
    height: "46px",
    width: "46px",
  },

  form: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    backgroundColor: "white",
  },

  dialog:{
   justifyContent:'center'
   },

link:{
  marginTop:'10px',
},

  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    padding: 0,
    marginTop: "30px",
    color: "white",
    width: "106px",
    height: "38px",
    borderRadius: "20px",
    fontSize: "15px",
    borderColor: "#008CA7",
    border: "solid",
    borderWidth: "2px",
    paddingTop: "2px",
  },
  error:{
    marginTop: '4px',
    color:'#f44336;',
    fontFamily: ("Roboto", "sans-serif"),
    fontSize: "0.75rem",
  },
  // image
  footer: {
    zIndex: "-1",
    position: "fixed",
    bottom: "0px",
    height: "250px",
    width: "100vw",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

