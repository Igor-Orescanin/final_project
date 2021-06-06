import { makeStyles } from "@material-ui/core/styles";

import image from "../../image/water_bg_mobile.svg";

export default makeStyles((theme) => ({
  container: {
    // backgroundColor:'blue',
    marginTop:'50px',
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
   //backgroundColor:'blue',
     height: '40px',
     marginTop: '22px',
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
    },
 
    formControl: {
       marginRight: '20px',
       marginTop:'20px',
    },
    
   typo2:{
     fontSize: '14px',
    // padding:'0px',
    marginTop:'-10px',
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
 
    notchedOutline: {
        borderColor: "#007982",
    },
 
   notification: {
     fontWeight: "300",
     margin: "20px 0 30px 0",
     color: "#30D4DE",
     fontSize: "15px",
   },
 
   test:{
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center", 
   },
 
   input: {
     display: "flex",
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "center",
 
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
    
     marginLeft: "40px",
     marginRight: "40px",
     fontFamily: ("Roboto", "sans-serif"),
     color: "#007982",
     fontSize: "18px",
    paddingTop:'2px',
     textAlign: "center",
   },
 
   alertTop:{
     marginTop:'25px'
   },
 
   lableTypo:{
     marginTop:'-10px',
   },
 
   typography3: {
 
     marginLeft: "33px",
     marginRight: "28px",
     fontFamily: ("Roboto", "sans-serif"),
     color: "#008CA7",
     fontSize: "15px",
    paddingTop:'2px',
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
    // backgroundColor:'blue',
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
     width: "90px",
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
     marginRight: "10px",
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
