import { makeStyles } from "@material-ui/core/styles";



export default makeStyles((theme)=>({
root:{
  "& .MuiAvatar-root":{
    borderRadius: theme.shape.borderRadius("1%")
  }
},

  myColor: {
      backgroundColor: "red"
   
    },
    otherColor: {
      backgroundColor: "#007982"
      
    }

}))