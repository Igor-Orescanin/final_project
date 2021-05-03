import { makeStyles } from "@material-ui/core/styles";

import image from '../../image/background_mobile.svg';

export default makeStyles((theme) => ({
  
  container: {
    height: '100vh',
    maxWidth: '100%',
    padding: '0',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    alignSelf: 'center',
    backgroundPosition: 'bottom',
    overflow: 'hidden'
  },


  paper: {
    height: '100vh',
    maxWidth: '100%',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundPosition: 'bottom',
  },

  typography: {
    marginTop: '50px',
    marginLeft: '40px',
    marginRight: '40px',
    fontFamily: ('Roboto', 'sans-serif'),
    color: "#007982",
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign:'center',
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
    width:'212px'
  },


  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
    padding: 0,
    backgroundColor: "#0C9EB5",
    color: 'white',
    width: '106px',
    height: '38px',
    borderRadius: '20px',
    fontSize: '15px',
    marginTop:'20px'
  },


  backgr: {
    backgroundImage: `url(${image})`,
    height: '340px',
    minWidth: '580px',
    padding: '0',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundPosition: 'bottom',

  },





}))