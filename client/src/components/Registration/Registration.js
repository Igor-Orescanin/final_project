// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";

//axios
//import * as api from "../../api";

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

const Registration = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    macAddress: "",
  });


  //const [ setErrors] = useState([]);

  //const [mailExist, setMailExist] = useState("");

  /* const handleSubmit = (e) => {
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
              history.push({
                pathname: "/adddevice",
                state: { userID: res.data._id }
              })
              //  console.log(res.data)
            }
            console.log(errors.msg)
            console.log(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }; */


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
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

           

              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                className={`${classes.inputField}  ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
                variant="outlined"
                required
                id="username"
                label="Name"
                name="username"
                size="small"

              // {...register("username",
              //   {
              //     required: true,
              //     maxLength: 20,
              //   })
              // }
              // error={Boolean(errors.username)}
              //  helperText='username is required!!!!'

              // InputLabelProps={{
              //   style: { color: "#007982" },
              // }}

              // InputProps={{
              //   classes: {
              //     root: classes.root,
              //     focused: classes.focused,
              //     notchedOutline: classes.notchedOutline,
              //   },
              // }}
              />


              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`${classes.inputField}  ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
                variant="outlined"
                required
                id="email"
                label="Email"
                name="email"
                size="small"
                InputLabelProps={{
                  style: { color: "#007982" },
                }}
              // InputProps={{
              //   classes: {
              //     root: classes.root,
              //     focused: classes.focused,
              //     notchedOutline: classes.notchedOutline,
              //   },
              // }}
              />

              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className={`${classes.inputField} ${classes.myInputLabel} ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
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
              // InputProps={{
              //   classes: {
              //     root: classes.root,
              //     focused: classes.focused,
              //     notchedOutline: classes.notchedOutline,
              //   },
              // }}
              />

              <TextField
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                className={`${classes.inputField} ${classes.myInputLabel} ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
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
              // InputProps={{
              //   classes: {
              //     root: classes.root,
              //     focused: classes.focused,
              //     notchedOutline: classes.notchedOutline,
              //   },
              // }}
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

            {/* {errors.length < 1 ? (
              <div></div>
            ) : (
              errors.map((error, index) => <h1 key={index}>{error.msg}</h1>)
            )}
            <h1>{mailExist}</h1> */}
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Registration;
