import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  
  container:{
    backgroundColor:'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  
  },

  paper: {
    height:'65vh',
    backgroundColor:'yellow',
     display: 'flex',
     flexDirection: 'column',
    alignItems: 'center',
 
  
  },
  top:{
    display:'flex',
    flexDirection:'row',
   // justifyContent:'center',
    marging:'0px, 10px',
    backgroundColor:'green',
  },


  groupButton:{
  },


  button:{
    borderColor: "#008CA7",
    marginTop:'34px',
    textTransform: "none",
    marginRight:'10px',
    marginLeft:'10px',
  },

  typography: {
   
    fontFamily: ('Roboto', 'sans-serif'),
    color: "#008CA7",
    fontSize: '12px',
    fontWeight: 'bold',
    paddingTop:'30px',
    paddingRight:'10px'
  },
  root:{
  '$.MuiTypography-h6':{
    fontSize: '12px',
    fontWeight: 'bold',
  },}

}))