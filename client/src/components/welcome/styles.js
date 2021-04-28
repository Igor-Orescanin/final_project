// general
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

// background picture
import image from "../../image/background_mobile.svg";

export default makeStyles((theme) => ({

  //for the container
  welcome: {
    display: "flex",
    //backgroundColor: "Red",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "65vh",
  },

  //for the button
  welcomeBtn: {
    margin: "20px",
    width: "80px",
    borderRadius: "9px",
    borderColor: "#008CA7",
    border: "solid",
    fontSize: "15px",
    textTransform: "none",
    paddingTop: "7px",
    paddingBottom: "7px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },

  //for the Image on the bottom
  footer: {
    zIndex: "-1",
    position: "fixed",
    bottom: "0px",
    height: "190px",
    //height:'170px',
    width: "100vw",
    //backgroundColor: "Blue",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
