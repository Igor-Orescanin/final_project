import { makeStyles } from "@material-ui/core/styles";

import image from "../../image/background_mobile.svg";
//import image2 from "../../image/welcome3_bg_mobile.svg";

export default makeStyles((

) => ({

  // top: {
  //   zIndex: "-1",
  //   position: "fixed",
  //   top: "0px",
  //   height: "230px",
  //   width: "100vw",
  //   backgroundImage: `url(${image2})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // },

  container: {
    marginTop: '150px',
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
    textAlign: 'center',
    marginTop: "64px",
    color: "#007982",
    fontSize: "24px",
    fontWeight: "bold",
  },

  form: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    padding: 0,
    color: "white",
    width: "140px",
    height: "48px",
    borderRadius: "20px",
    fontSize: "15px",
    fontWeight: "400",
    marginTop: '30px',
    borderColor: "#008CA7",
    border: "solid",
    borderWidth: "2px",
    textTransform: "none",
    paddingTop: "9px",
    paddingBottom: "5px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },

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
}))
