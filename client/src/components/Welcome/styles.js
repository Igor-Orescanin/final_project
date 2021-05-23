// general
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

// background picture
import image from "../../image/welcome2_bg_mobile.svg";

export default makeStyles((theme) => ({


  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "65vh",
  },

  button: {
    margin: "10px",
    width: "150px",
    borderRadius: "7px",
    borderColor: "#008CA7",
    border: "solid",
    fontSize: "18px",
    borderWidth: "2px",
    textTransform: "none",
    paddingTop: "12px",
    paddingBottom: "10px"
  },

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
