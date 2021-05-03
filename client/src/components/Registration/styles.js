// general
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
    width:'212px'
  },

  link: {
    paddingTop: '20px',
    paddingBottom: '20px',
    color: "#007982",
  },

  button: {
    fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
    padding: 0,
    marginTop:'30px',
    backgroundColor: "#0C9EB5",
    color: 'white',
    width: '106px',
    height: '38px',
    borderRadius: '20px',
    fontSize: '15px'
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


