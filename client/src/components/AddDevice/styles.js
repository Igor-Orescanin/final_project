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
    marginTop: "20px",
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
