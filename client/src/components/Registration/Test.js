// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";

//axios
import * as api from "../../api";

// css
import "../../App.css";

//styles
import {
  Container,
  ThemeProvider,
  Typography,
  Button,
  Avatar,
  TextField,
} from "@material-ui/core";

//styles to use the connection
import useStyles from "./styles.js";

//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

// theme
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#18B0C3",
      main: "#0C9EB5",
      dark: "#008CA7",
      contrastText: "#fff",
    },
  },
});

 const Test = (props) => {
   const classes = useStyles();
  
   const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    macAddress: "",
  });



//   const test = "test";

//   const [banane, setBanane] = useState("");
 const [errors, setErrors] = useState({ mari: "" });

//   const { register, formState: { errors }, handleSubmit } = useState();


const handelChange =(e) =>{

}

    const handleSubmit = (e) => {
      e.preventDefault();


      if(formData.username === ''){
        setErrors({mari: 'not required'})
        console.log('noo')
      }else{
      
        console.log('yeah')
      }
      console.log(formData)
//   //   e.preventDefault();

//   //    const {target: { value },} = e;
   
//   //   setErrors({ mari: "" });
//   //  // setMailExist(res.data.msg);
//   //   setBanane(value);
 
//   //   let reg = new RegExp(/^\d*$/).test(value);

//   //   if (!reg) {
//   //     setErrors({ mari: "fuck it works" });
//   //   }
 }



   return (
    <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <Container className={classes.container}>
        <div className={classes.paper}>

        <form className={classes.form} noValidate >
              <TextField
              onSubmit={handleSubmit}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value },{handelChange})
                }
                // test for error
                error={Boolean(errors?.mari)}
                helperText={errors?.mari}

                className={`${classes.inputField}`}
                variant="outlined"
                required = {true}
                maxLenght={4}
                id="username"
                label="Name"
                name="username"
                size="small"
                InputLabelProps={{
                  style: { color: "#007982" },
                }}
                 InputProps={{
                   classes: {
                     root: classes.root,
                     focused: classes.focused,
                     notchedOutline: classes.notchedOutline,
                   },
                 }}
              />
 <TextField
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                //test for error
                error={Boolean(errors?.mari)}
                helperText={errors?.mari}
                
                className={`${classes.inputField}`}
                variant="outlined"
                required
                id="email"
                label="Email"
                name="email"
                size="small"
                InputLabelProps={{
                  style: { color: "#007982" },
                }}
                 InputProps={{
                   classes: {
                     root: classes.root,
                     focused: classes.focused,
                     notchedOutline: classes.notchedOutline,
                   },
                 }}
              />
            </form> 
            <Button
            className={classes.button}
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
        </div>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
 };

 export default Test;

