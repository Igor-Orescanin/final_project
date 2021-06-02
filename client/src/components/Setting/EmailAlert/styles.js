import { makeStyles } from "@material-ui/core/styles";

import image from "../../../image/charts_bg_mobile.svg";

export default makeStyles((theme) => ({
  container: {
    //  backgroundColor:'red',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    color: "#0C9EB5",
    height: "65vh",
  },

  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  heading: {
    marginBottom: "30px",
    fontWeight: "900",
    fontSize: "15px",
    color: "#007982",
  },

  headingSec: {
    fontWeight: "700",
    fontSize: "12px",
    color: "#007982",
    marginRight: "-140px",
    paddingBottom:'8px',
    marginBottom:'-20px'
  },
  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", "sans-serif"),
    borderColor: "#008CA7",
    textTransform: "none",
    marginLeft: "10px",
    paddingTop: "2px",
    padding: "24px",
    paddingBottom: "0px",
    border: "solid",
    borderWidth: "2px",
    marginRight:"10px",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

  },
  test:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", 
  },

  typo:{
    fontSize: '15px',
    fontWeight: '400',
    paddingRight:'22px',
  },

   name:{
    height: '80px',
    marginTop: '22px',
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
   },

   formControl: {
      marginRight: '20px',
      marginTop:'20px',
   },
   
  typo2:{
    fontSize: '14px',
    padding:'0px'
  },

   root: {
       "&:hover $notchedOutline": {
           borderColor: "#007982",
       },
       "&$focused $notchedOutline": {
           borderColor: "#007982",
       },
   },
   
   focused: {},
   notchedOutline: {},

   notchedOutline: {
       borderColor: "#007982",
   },

  notification: {
    fontWeight: "300",
    margin: "20px 0 30px 0",
    color: "#30D4DE",
    fontSize: "15px",
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
    marginLeft:"10px",
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
    left: "0px",
    height: "250px",
    width: "100vw",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
