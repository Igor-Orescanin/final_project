// general
import { makeStyles } from "@material-ui/core/styles";

// image for background
import image from "../../image/background_mobile.svg";

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
    alignItems: "center"
  },
  
  typography: {
    marginTop: "64px",
    color: "#007982",
    fontSize: "24px",
    fontWeight: "bold",
  },

  avatar: {
    marginTop: "20px",
    backgroundColor: "#007982",
    alignContent: "center",
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
    backgroundColor: "white"
  },

  link: {
    paddingTop: "20px",
    paddingBottom: "20px",
    color: "#007982",
    paddingRight: "14px",
    paddingLeft: "14px",
    textDecoration: "none",
  },

  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    padding: 0,
    backgroundColor: "#0C9EB5",
    color: "white",
    width: "80px",
    height: "38px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "400",
    borderColor: "#008CA7",
    border: "solid",
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

