// general 
import { makeStyles } from "@material-ui/core/styles";

// background picture
import image from '../../image/background_mobile.svg'


export default makeStyles((theme) => ({

    welcomeBtn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '520px'
  
    },

    buttonWel: {
      marginTop: '140px',
      width: '80px',
      height: '31px',
      borderRadius: '5px',
      fontFamily: ("Roboto", "Helvetica", "Arial", 'sans-serif'),
      paddingLeft: '50px',
      paddingRight: '50px',
      backgroundColor: "#0C9EB5",
      color: 'white',
      fontSize: '15px'
    },

    background:{
        backgroundImage: `url(${image})`,
    },
    
  }))