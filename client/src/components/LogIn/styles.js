// general
import { makeStyles } from "@material-ui/core/styles";
import image from '../../image/background_mobile.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default makeStyles((theme) => ({
  container: {
   // backgroundColor:'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    //height:'65vh'
   
  },

  paper: {
    height:'65vh',
  //  backgroundColor:'yellow',
     display: 'flex',
     flexDirection: 'column',
    alignItems: 'center',
 
  
  },

  typography: {
    marginTop: '64px',
    fontFamily: ('Roboto', 'sans-serif'),
    color: "#007982",
    fontSize: '24px',
    fontWeight: 'bold',
  },

  avatar: {
    marginTop: '20px',
    backgroundColor: "#007982",
    alignContent: 'center',
  },
  form: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  root: {
    '&:hover $notchedOutline': {
      borderColor: "#007982"
    },
    '&$focused $notchedOutline': {
      borderColor: "#007982"
    }
  },
  focused: {},
  notchedOutline: {},

  notchedOutline: {
    borderColor: '#007982'
  },

  inputField: {
    marginTop: "20px",
    borderColor: "#007982",
    width:'212px',
    backgroundColor:'white',
  },

  link: {
    paddingTop: '20px',
    paddingBottom: '20px',
    color: "#007982",
    paddingRight:'14px',
    paddingLeft:'14px',
    textDecoration: 'none',
  },

  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
    padding:0,
    backgroundColor: "#0C9EB5",
    color: 'white',
    width: '80px',
    height: '38px',
    borderRadius: '20px',
    fontSize: '15px',
    fontWeight: '400',
   
  },

  // backgr: {
  //   backgroundImage: `url(${image})`,
  //   height: '340px',
  //   minWidth: '580px',
  //   padding: '0',
  //   backgroundRepeat: 'no-repeat',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyItems: 'center',
  //   backgroundPosition: 'bottom',

  // },
 
 //for the Image on the bottom
 footer: {
  zIndex: "-1",
  position: "fixed",
  bottom: "0px",
  height: "190px",
  //height:'170px',
  width: "100vw",
  //backgroundColor: "Blue",
  backgroundImage: `url(${image})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
},

}))


// @media only screen and (max-width: 600px) {
//    {
//     typography: {
//       marginTop: '24px',
//   }
// }}