import { makeStyles } from "@material-ui/core/styles";

import image from "../../image/welcome3_bg_mobile.svg";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "65vh",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  top: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "-90px",
  },

  button: {
    bordercolor: "#008CA7",
    marginTop: "34px",
    textTransform: "none",
    marginRight: "10px",
    marginLeft: "10px",
  },

  addbutton: {
    borderColor: "#008CA7",
    marginTop: "20px",
    textTransform: "none",
    marginRight: "10px",
    marginLeft: "10px",
    paddingTop: "8px",
    paddingBottom: "6px",
  },

  typography: {
    fontFamily: ("Roboto", "sans-serif"),
    color: "#008CA7",
    fontSize: "12px",
    fontWeight: "bold",
    paddingTop: "30px",
    paddingRight: "10px",
  },
  root: {
    "$.MuiTypography-h6": {
      fontSize: "12px",
      fontWeight: "bold",
    },
  },

  footer: {
    zIndex: "-1",
    position: "fixed",
    bottom: "0px",
    height: "250px",
    //height:'170px',
    width: "100vw",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
