// general
import { makeStyles } from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  
  navContainer:{
    margin:'0px',
    padding:'0px',
    backgroundColor:'#30D4DE',
    height:'75px',
    borderBottom:'4px solid #0C9EB5',
    display: 'flex',
    flexDirection: 'column  ',
    justifyContent:'center',
    backgroundSize:'cover'
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

