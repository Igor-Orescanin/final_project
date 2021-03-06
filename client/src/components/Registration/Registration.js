// react
import React, { useState } from "react";

// style
import { StylesProvider } from "@material-ui/core/styles";

// error handling in a form with validation
import { useFormik } from "formik";
import * as yup from "yup";

//axios
import * as api from "../../api";

// css
import "../../App.css";

//styles to use the connection
import useStyles from "./styles.js";

//styles
import {
  Container,
  ThemeProvider,
  Typography,
  Button,
  Avatar,
  TextField,
  Link,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContentText,
  DialogContent,
} from "@material-ui/core";

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
  overrides: {
    MuiDialogContent: {
      root: {
        textAlign: 'center',
      },
    },
    MuiDialog: {
      paper: {
        borderWidth: 2,
        borderRadius: 4,
        borderColor: "#007982",
        borderStyle: "solid",
      },
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
  const fetchUser = props.fetchUser;
  const classes = useStyles();
  const { history } = props;

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    api
      .addUser(values)
      .then((res) => {
        console.log(res);
        if (res.data.msg === "Mail already exists") {
          setError(res.data.msg);
          setSuccess(null);
        } else if (res.data.msg === "Thanks for registration") {
          fetchUser(res.data.user);
          setError(null);
          setOpen(true);
          setSuccess(res.data.msg);
          formik.resetForm();
          //  history.push({
          //    pathname: "/",
          //  })
        }
      })
      .catch((error) => {
        console.log(error);
      });
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

  //lengh of character
  const CHARACTER_LIMIT = 15;

  const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

  const handleClose = () => {
    history.push({
      pathname: "/",
    });
  };

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <div className={classes.paper}>
            <Typography className={classes.typography}>Registration</Typography>

            <Avatar className={classes.avatar} />

            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <TextField
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${classes.inputField}  ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
                variant="outlined"
                required
                id="username"
                label="User Name"
                name="username"
                size="small"
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={
                  formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : ""
                }
                InputLabelProps={{
                  style: { color: "#007982" },
                }}
                inputProps={{
                  maxLength: CHARACTER_LIMIT,
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
                className={`${classes.inputField}  ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
                variant="outlined"
                required
                id="email"
                label="Email"
                name="email"
                size="small"
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""
                }
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
              {/*  message "Mail Exist" from backend usersController.js */}
              {!success && (
                <div className={classes.error}> {error ? error : ""}</div>
              )}

              <TextField
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`${classes.inputField} ${classes.myInputLabel} ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
                id="password"
                required
                label="Password"
                variant="outlined"
                name="password"
                type="password"
                size="small"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={
                  formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""
                }
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
                className={`${classes.inputField} ${classes.myInputLabel} ${classes.focused} ${classes.notchedOutline} ${classes.root}`}
                id="confirmPassword"
                required
                label="Confirm Password"
                variant="outlined"
                name="confirmPassword"
                type="password"
                size="small"
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : ""
                }
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

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {!error && <div> {success ? success : ""}</div>}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                   Thanks for registration!
                </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialog}>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    OK
                  </Button>
                </DialogActions>
              </Dialog>

              {/*  message "Thanks for registering" from backend usersController.js */}
              {/* {!error && <div> {success ? success : ""}</div>} */}

              <Button
              onClick={handleClickOpen}
                className={classes.button}
                type="submit"
                disable={!formik.isValid}
                variant="contained"
                color="primary"
              >
                Register
              </Button>

              <Link
                className={classes.link}
                onClick={() => history.push("/")}
                variant="body2"
              >
                Go back
              </Link>
            </form>
          </div>

          <div className={classes.footer}></div>
          <div></div>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Registration;
