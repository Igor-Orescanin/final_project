import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
   // backgroundColor: "red",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   // backgroundColor:'black',
  },

  radioButton: {
    backgroundColor: "yellow",
   cursor: "default",
   margin:'0',
   padding:'0',
  },
  
  groupButton: {
    marginTop:'15px',
    display: "flex",
    flexDirection: "row",
    // backgroundColor:'green',
    alignItems: "center",
    justifyContent:'center',
  },

  checkIcon:{
    color:'#00A2AC'
  },

  noIcon:{
    color:'red'
  },

  button: {
   
    borderColor: "#008CA7",
    textTransform: "none",
   //marginRight: "6px",
     marginLeft: "10px",
  },

  typography: {
    fontFamily: ("Roboto", "sans-serif"),
    color: "#008CA7",
    fontSize: "12px",
    fontWeight: "bold",
  },
  root: {
    "& .MuiTypography-h6": {
      fontSize: "12px",
      fontWeight: "bold",
    },
  },
}));
