// general
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

// background picture
import image from "../../image/welcome2_bg_mobile.svg";

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
    margin: "10px",
    width: "150px",
    borderRadius: "9px",
    borderColor: "#008CA7",
    border: "solid",
    fontSize: "18px",
    textTransform: "none",
    paddingTop: "10px",
    paddingBottom: "10px"
  },

  //for the Image on the bottom
  footer: {
    zIndex: "-1",
    position: "fixed",
    bottom: "0px",
    height: "230px",
    //height:'170px',
    width: "100vw",
    //backgroundColor: "Blue",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
