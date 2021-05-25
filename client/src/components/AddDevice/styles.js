import { makeStyles } from "@material-ui/core/styles";

import image from "../../image/background_mobile.svg";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  typography: {
    marginTop: "30px",
    marginLeft: "40px",
    marginRight: "40px",
    fontFamily: ("Roboto", "sans-serif"),
    color: "#007982",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
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

  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    padding: 0,
    backgroundColor: "#0C9EB5",
    color: "white",
    width: "106px",
    height: "38px",
    borderRadius: "20px",
    fontSize: "15px",
    marginTop: "30px",
    border: "solid",
    borderWidth: "2px",
    paddingTop: "2px",
    borderColor: "#008CA7",
  },

  buttonHelp: {
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    padding: 0,
    borderColor: "#0C9EB5",
    color: "#0C9EB5",
    width: "106px",
    height: "32px",
    paddingTop: "2px",
    borderRadius: "4px",
    fontSize: "15px",
    marginTop: "30px",
    backgroundColor:'white',
    textTransform: "none",
    '&:hover': {
      backgroundColor: '#0C9EB5',
      color:'white',
    },
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
