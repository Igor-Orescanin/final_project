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
    marginTop: "25px",
    outlineColor: "#007982"
  },

  link: {
    paddingTop: '20px',
    paddingBottom: '20px',
    color: "#007982",
  },

  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
    padding: 0,
    backgroundColor: "#0C9EB5",
    color: 'white',
    width: '80px',
    height: '31px',
    borderRadius: '20px',
    fontSize: '15px'
  },

  backgr: {
    //heigh:'100px',
    //backgroundColor:'yellow',
    backgroundImage: `url(${image})`,
    // height:'30px',
    height: '340px',
    minWidth: '580px',
    heigh:'200px',
    width:'300px',
    padding: '0',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundPosition: 'bottom',
  }

}))

