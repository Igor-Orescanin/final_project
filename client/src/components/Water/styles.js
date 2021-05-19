import { makeStyles } from "@material-ui/core/styles";

// background picture
import image from "../../image/water2_bg_mobile.svg";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
  },

  paper:{
    zIndex: "-2",
    paddingTop:'20px',
    paddingBottom:'20px',
    marginBottom:'120px',
    borderColor:'#30D4DE',
    border:'solid',
    borderWidth:'1px',
    textAlign:'center',
  },

  typography: {
    fontFamily: ("Roboto", "sans-serif"),
    color: "#008CA7",
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "-10px",
  },

  typographyInfo1:{
    zIndex: "-2",
    marginRight:'140px',
    marginTop:'50px',
    color: "#008CA7",
    fontSize: "12px",
    fontFamily: ('Roboto', 'sans-serif'),
  },

  typographyInfo:{
    fontSize: "12px",
    fontFamily: ('Roboto', 'sans-serif'),
    paddingLeft:'37px',
    paddingRight:'37px',
  },
  typographyInfo2:{
    fontSize: "15px",
    fontFamily: ('Roboto', 'sans-serif'),
    paddingTop:'17px',
    paddingLeft:'37px',
    paddingRight:'37px',
    color: "#008CA7",
  },

  button: {
    textAlign: "center",
    fontSize: "15px",
    bordercolor: "#008CA7",
    marginTop: "40px",
    textTransform: "none",
    paddingRight: "10px",
    paddingLeft: "10px",
    paddingTop: "7px",
    paddingBottom: "7px",
  },

  chart: {
    marginTop: "20px",
    marginButton: "0px",
  },

  iconButton:{
    color:'#008CA7',
    marginTop:'40px',
  },

  footer: {
    zIndex: "-1",
    position: "fixed",
    bottom: "0px",
    height: "300px",
    //height:'170px',
    width: "100vw",
    //backgroundColor: "Blue",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },

}));
