// react
import React, { useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";


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
import axios from "axios";

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

// const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;

const validationSchema = yup.object({
  username: yup.string().min(3).required("Name is required"),
  email: yup.string().email("Email is required").required(),
  password: yup.string().matches(PASSWORD_REGEX, "Please enter a strong password").required(),
  confirmPassword: yup.string().required("Please confirm your password").when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: yup.string().oneOf([yup.ref("password")], "Password does not match")
  }),
});

//__________________________________________________________start

const Registration = (props) => {
  const classes = useStyles();
  const { history } = props;

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);


  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    const response = await axios.post("http://localhost:3005/users", data).catch((err) => {
      if (err && err.response) {
        setError(err.response.message)
      }

    });

    if (response && response.data) {
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: { username: "", email: "", password: "", confirmPassword: "" },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });



  // console.log("Error:", formik.errors);

  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   macAddress: "",
  // });

  // const [errors, setErrors] = useState([]);



  // const [mailExist, setMailExist] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   api
  //     .addUser(formData)
  //     .then((res) => {
  //       if (res.data.error) {
  //         setErrors(res.data.error);
  //       } else if (res.data.msg === "Mail exists") {
  //         setMailExist(res.data.msg);
  //         setErrors("");
  //       } else {
  //         history.push("/adddevice");
  //       }

  //       // console.log(res.data);


  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };


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

            <form className={classes.form} noValidate onSubmit={formik.handleSubmit}>


              <TextField
                // onChange={(e) =>
                //   setFormData({ ...formData, username: e.target.value })
                // }
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${classes.inputField}  ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
                variant="outlined"
                required
                id="username"
                label="Name"
                name="username"
                size="small"
                // error={Boolean(errors?.msg)}
                // helperText={errors?.msg}
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
              <div>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</div>

              <TextField
                // onChange={(e) =>
                //   setFormData({ ...formData, email: e.target.value })
                // }
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
              <div>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</div>




              <TextField
                // onChange={(e) =>
                //   setFormData({ ...formData, password: e.target.value })
                // }
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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

              <div>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</div>



              <TextField
                // onChange={(e) =>
                //   setFormData({ ...formData, confirmPassword: e.target.value })
                // }
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
              <div>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}</div>

              <Button
                className={classes.button}
                type="submit"

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

           )} */}

            {/* {errors.length < 1 ? (

              <div></div>
            ) : (
              errors.map((error, index) => error.msg)

            )}
            {console.log(errors)} */}

            {/* <h1>{mailExist}</h1> */}
          </div>

          <div className={classes.footer}></div>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Registration;
