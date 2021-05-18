import { FormHelperText } from "@material-ui/core";
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






navContainer:{

    margin:'0px',
    padding:'0px',
    backgroundColor:'#30D4DE',
    borderBottom:'4px solid #0C9EB5',
    
  },
//_______________maritza
  // root: {
  //   flexGrow: 1,
  // },
  // paper: {
  //   padding: theme.spacing(2),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // },

// ________ color: theme.palette.text.secondary,test


// chart:{
//   color: theme.palette.text.secondary,
// },



// root: {
//   flexGrow: 1,
// },

 paper: {
  display:'flex',
  flexWrap:'wrap',
  //backgroundColor:'red',
  margin:'20px',
  padding: theme.spacing(2),
  textAlign: 'center',
//   // color: theme.palette.text.secondary,

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



}))
