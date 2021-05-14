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
import { useForm, Controller } from "react-hook-form";

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

//__________________________________________________________start

const Registration = (props) => {
  const classes = useStyles();
  const { history } = props;
 
  const fetchUser = props.fetchUser
  console.log(props)

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    macAddress: "",
  });

  const [errors, setErrors] = useState([]);


  const [mailExist, setMailExist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    api
      .addUser(formData)
      .then((res) => {
        if (res.data.error) {
          setErrors(res.data.error);
        } else if (res.data.msg === "Mail exists") {
          setMailExist(res.data.msg);
          setErrors("");
        } else {
          const fetchUser = props.fetchUser
         
          fetchUser(res.data)
           history.push({
            pathname: "/adddevice",
            state: {userId : res.data._id, username: res.data.username}
           })
          
        }
     
          // console.log(res.data);
          // console.log(Object.values(errors)); 
      })
      .catch((error) => {
        console.log(error);
      });
   };


  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.paper}>
            <Typography
              className={classes.typography}
              component="h1"
              variant="h5"
            >
              Registration
            </Typography>

            <Avatar className={classes.avatar} />
            <form className={classes.form} noValidate onSubmit={handleSubmit}>

           

              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                // test for error
                error={Boolean(errors?.mari)}
                helperText={errors?.mari}

                className={`${classes.inputField}`}
                variant="outlined"
                required
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
       
                <h1>{errors.msg}</h1>
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

              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`${classes.inputField} ${classes.myInputLabel}`}
                required
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                type="password"
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
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className={`${classes.inputField} ${classes.myInputLabel}`}
                required
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                type="password"
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

              <Button
                className={classes.button}
                type="submit"
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Register
              </Button>

            </form>

            {errors.length < 1 ? (
             <div></div>
           ) : (

             errors.map((error, index) => <h1 key={index}>{error.msg}</h1>)
           )}
           <h1>{mailExist}</h1>  
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Registration;
