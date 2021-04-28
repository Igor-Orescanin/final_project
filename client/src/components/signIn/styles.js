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
    margin: '10px',
    backgroundColor: "#007982",
    alignContent: 'center',
  },
  form: {
    marginTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputField: {
    marginTop: "20px",
    outlineColor: "#007982",
    color: 'green'
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


