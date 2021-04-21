import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";



export default makeStyles((theme)=>({

  myColor: {
      backgroundColor:"#007982",
     
      width:'80px',
      height:'80px'
   
    },
    otherColor: {
      backgroundColor: "#007982"
      
    },
    typography:{
      variant:"body2",
      color:"textSecondary",
      align:"center",
      color: "#007982",
      fontSize:'32px',
      fontWeight:'bold'
    },
    button: {
      fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
      padding: 0,
      backgroundColor: "#0C9EB5",
      color:'white',
      width: '80px',
      height: '31px',
      borderRadius: '20px',
      fontSize: '15px'
    },
    textfield: {
      padding: 0, 
      width: '212px',
      height: '31px',
      margin: '20px',
      borderRadius: '3px'
    }
}))

// 25.47.119.246
// igor 25.45.213.82
// maritza 25.47.109.138
