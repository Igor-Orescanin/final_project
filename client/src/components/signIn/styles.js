// general
import { makeStyles } from "@material-ui/core/styles";


import image from '../../image/background_mobile.svg'


export default makeStyles((theme) => ({
  root: {
    "& .MuiPaper-root":{
      backgroundColor:'green'
    }
  },


  paper: {
    backgroundColor:'yellow',
  },

   typography: {
  //   marginTop: '64px',
    fontFamily: ('Roboto', 'sans-serif'),
     color: "#007982",
     fontSize: '24px',
     fontWeight: 'bold',
   },

  avatar: {
    margin: 'auto',
    marginTop:'20px',
    backgroundColor: "#007982",
  
  },


  inputField: {
    marginTop: "20px",
    outlineColor: "#007982"
  },

  container: {
    backgroundColor:'green!important',
    margin:'0px',
    padding:'0px',
    display:'flex',
    justifyContent:'center',
  },


}))

