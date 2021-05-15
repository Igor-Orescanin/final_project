// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";

// error handling in a form with validation
import { useFormik } from "formik";
import * as yup from "yup";

//axios
import * as api from "../../api";
import axios from "axios"; 
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

//validations
//const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
const validationSchema = yup.object({
  username: yup.string().min(3).required("Name is required"),
  email: yup.string().email("Email is required").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match"),
    }),
});

//__________________________________________________________start

const Registration = (props) => {
  const classes = useStyles();
  const { history } = props;

  const fetchUser = props.fetchUser;
 // console.log(props);

  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [mailExist, setMailExist] = useState("");

  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    const response = await axios
      .post("http://localhost:3005/users", data)
      .catch((err) => {
        if (err && err.response) {
          setError(err.response.message);

        //  }else if (data.msg === "Mail exists") {
        //     setMailExist(data.msg);
             }
          });
        
    if (response && response.data) {
      setSuccess(response.data.message);
      formik.resetForm();
    }
    // else if (response.data.msg === "Mail exists") {
    //   setMailExist(response.data.msg);
    //    }
    

   
    // response = await api
    // .addUser(formik)
    // .then((response) => {
    //   if (response.data.msg === "Mail exists") {
    //     setMailExist(response.data.msg);
    //   } })
    //   console.log(mailExist)

  };
  

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });





  //  const handleSubmit = (e) => {
  //    e.preventDefault();

  //    api
  //      .addUser(formData)
  //      .then((res) => {
  //       if (res.data.error) {
  //         setErrors(res.data.error);
  //        } else if (res.data.msg === "Mail exists") { 
    // console.log(res.data.msg) 
    //      if (res.data.msg === "Mail exists") {
    //        setMailExist(res.data.msg);
    //      } 
         //else {
  //         const fetchUser = props.fetchUser
         
  //         fetchUser(res.data)
  //          history.push({
  //           pathname: "/adddevice",
  //           state: {userId : res.data._id, username: res.data.username}
  //          })
          
  //       }
     
  //         // console.log(res.data);
  //         // console.log(Object.values(errors)); 
  //     })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  //  };

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

            <div> {success ? success : ""} </div>
            <form
              className={classes.form} noValidate onSubmit={formik.handleSubmit}
            >
              <TextField
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${classes.inputField}`}
                variant="outlined"
                required
                id="username"
                label="Name"
                name="username"
                size="small"
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username ? formik.errors.username : ""}
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
                value={formik.values.email}
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                className={`${classes.inputField}`}
                variant="outlined"
                required
                id="email"
                label="Email"
                name="email"
                size="small"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${classes.inputField} ${classes.myInputLabel}`}
                required
                id="password"
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                size="small"
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
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
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${classes.inputField} ${classes.myInputLabel}`}
                required
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                type="password"
                size="small"
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
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
               // onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </form>

            <h1>{mailExist}</h1>
          </div>
          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Registration;
