import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import image from '../image/background_mobile.svg'

export default makeStyles((theme) => ({


  container: {
    // backgroundColor:'green'
    //backgroundImage: `url(${image})`,
    //  marginTop:'90px',
    height: '100vh',
    maxWidth: '100%',
    padding: '0',
    // backgroundColor:'yellow',
    //  backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    alignSelf: 'center',
    backgroundPosition: 'bottom',
  },

  paper: {
    //backgroundColor:'yellow',
    //backgroundImage: `url(${image})`,
    // height:'30px',
    height: '100vh',
    maxWidth: '100%',
    // heigh:'100vh',
    // padding:'0',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundPosition: 'bottom',
    //  backgroundSize:'cover'

  },

  form: {
    marginTop: '10px',
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


  link: {
    paddingTop: '20px',
    paddingBottom: '20px',
    color: "#007982",
  },
  backgr: {
    //heigh:'100px',
    //backgroundColor:'yellow',
    backgroundImage: `url(${image})`,
    // height:'30px',
    height: '340px',
    minWidth: '580px',
    //heigh:'200px',
    //width:'300px',
    padding: '0',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
    backgroundPosition: 'bottom',

  },

  avatar: {
    margin: '10px',
    backgroundColor: "#007982",
    alignContent: 'center',

    // width:'80px',
    // height:'80px'

  },
  otherColor: {
    backgroundColor: "#007982"

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
  textfield: {
    padding: 0,
    width: '212px',
    height: '31px',
    margin: '20px',
    borderRadius: '3px'
  },
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
  navbar: {
    
    padding:0,
    backgroundColor: '#30D4DE',
    backgroundSize: 'fit-content',
    color: 'white',
    fontWeight: '600',
    borderBottom: '5px solid #0C9EB5',
  },
  navTop: {
  display: 'flex',
  justifyContent: 'space-between',
  borderBottom: '1px solid black',
  padding: '20px 15px 5px 15px' 
  
},
navBottom: {
  display: 'flex',
  justifyContent: 'space-between',
 listStyle: 'none',
 padding: '15px',
},
  // bg:{
  //    backgroundImage: `url(${image})`,
  //    height:'100vh',
  //    backgroundRepeat:'no-repeat',
  //   alignSelf:'center',
  //   backgroundPosition:'center',
  // }


//__________________Navbar Styles_________________________________
  navContainer:{
    padding:'0px',
    backgroundColor:'#30D4DE',
    height:'75px',
    borderBottom:'4px solid #0C9EB5',
    display: 'flex',
    flexDirection: 'column  ',
    justifyContent:'center'
  },
 
  secondaryNav:{ 
    borderBottom:'2px solid #0C9EB5',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent:'center',
  },

  icon:{
    marginRight:'25px' ,
    color:'#ffffff'
  },

  primaryNav:{
    marginTop:'7px',
    display: 'flex',
    justifyContent: 'space-between',
    alignContent:'center',

  },

  typo:{
    marginLeft:'25px' ,
    fontSize: '15px',
     fontWeight:700,
     color:'#ffffff'
  }


}))

// 25.47.119.246
// igor 25.45.213.82
// maritza 25.47.109.138
