import { makeStyles } from "@material-ui/core/styles";

import image from "../../image/water_bg_mobile.svg";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  paper2: {
    zIndex: "-2",
    paddingTop: "27px",
    paddingBottom: "20px",
    borderColor: "#30D4DE",
    border: "solid",
    borderWidth: "1px",
    textAlign: "center",
    marginTop: "-17px",
    width: "232px",
  },

  typography1: {
    fontSize: "15px",
    fontFamily: ("Roboto", "sans-serif"),
    paddingTop: "17px",
    paddingLeft: "15px",
    paddingRight: "25px",
    color: "#008CA7",
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
  typographyInfo: {
    fontSize: "12px",
    fontFamily: ("Roboto", "sans-serif"),
    paddingLeft: "37px",
    paddingRight: "37px",
  },

  typographyInfo1: {
    fontSize: "12px",
    fontFamily: ("Roboto", "sans-serif"),
    textAlign: "center",
  },

  form: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  gpioheading: {
    marginTop: "15px",
    backgroundColor: "#0C9EB5",
    paddingTop: "10px",
    padding: "8px",
    color: "white",
    borderRadius: "5px",
    width: "192px",
  },

  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  inputField: {
    marginTop: "20px",
    width: "154px",
    backgroundColor: "white",
  },
  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    borderColor: "#008CA7",
    textTransform: "none",
    width: "106px",
    height: "32px",
    marginLeft: "10px",
    paddingTop: "2px",
    borderRadius: "4px",
    //padding: "24px",
    paddingBottom: "0px",
    border: "solid",
    borderWidth: "2px",
    marginRight:"10px",
    marginTop: "30px",
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
    marginLeft: "10px",
    marginRight: "10px",
    backgroundColor: "white",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#0C9EB5",
      color: "white",
    },
  },

  //for the Image on the bottom
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
