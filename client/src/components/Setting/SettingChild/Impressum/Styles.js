import { makeStyles } from "@material-ui/core/styles";
import logo from "../../../../image/logo.png";
import image from "../../../../image/charts_bg_mobile.svg";

export default makeStyles((theme) => ({
  container: {
    //backgroundColor: 'orange',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    //height: '65vh',
  },

  heading: {
    marginTop: "30px",
    fontWeight: "900",
    fontSize: "30px",
    color: "#007982",
    padding: "10px",
  },

  conditions: {
    margin: "0 30px",
    textAlign: "justify",
    marginBottom: "150px",
    fontSize: "100%",
  },

  logo: { backgroundImage: `url(${image})` },

  //for the Image on the bottom
  footer: {
    zIndex: "1",
    position: "fixed",
    bottom: "0px",
    left: "0px",
    height: "250px",
    width: "100vw",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
