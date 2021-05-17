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
import axios from "axios"; // not sure why that
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
//const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
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
const Test = (props) => {
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
                // error={formik.touched.username && formik.errors.username ? formik.errors.username : ""}
                // helperText={formik.touched.username && formik.errors.username ? formik.errors.username : ""}
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
                 InputProps={{
                   classes: {
                     root: classes.root,
                     focused: classes.focused,
                     notchedOutline: classes.notchedOutline,
                   },
                 }}
              />
              {/* <div>{formik.touched.username && formik.errors.username ? formik.errors.username : ""}</div> */}

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
                // error={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                // helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
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
                 InputProps={{
                   classes: {
                     root: classes.root,
                     focused: classes.focused,
                     notchedOutline: classes.notchedOutline,
                   },
                 }}
              />
              {/* <div>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</div> */}

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
                // error={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                // helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
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
                 InputProps={{
                   classes: {
                     root: classes.root,
                     focused: classes.focused,
                     notchedOutline: classes.notchedOutline,
                   },
                 }}
              />

              {/* <div>{formik.touched.password && formik.errors.password ? formik.errors.password : ""}</div> */}
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
                // error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
                // helperText={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
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
                 InputProps={{
                   classes: {
                     root: classes.root,
                     focused: classes.focused,
                     notchedOutline: classes.notchedOutline,
                   },
                 }}
              />
              {/* <div>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}</div> */}

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
export default Test;



//___________________________________________________________________functioniert halb


// // react
// import React, { useEffect, useState } from "react";
// import { StylesProvider } from "@material-ui/core/styles";

// //validator
// import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// //axios
// import * as api from "../../api";

// //styles
// import { Container, ThemeProvider, Button , TextField} from "@material-ui/core";

// //styles to use the connection
// import useStyles from "./styles.js";

// //change color as a theme
// import { createMuiTheme } from "@material-ui/core/styles";

// // theme
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#18B0C3",
//       main: "#0C9EB5",
//       dark: "#008CA7",
//       contrastText: "#fff",
//     },
//   },
// });

// //---------------------------------------------start
// const Test = (props) => {
//   const classes = useStyles();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword:"",
//   });

//   // const handleChange = (event) => {
//   //   const email = event.target.value;
//   //   const username = event.target.value;
//   //   setFormData({ email, username });
//   // };

//   const [errors, setErrors] = useState({error:''});

//   const [mailExist, setMailExist] = useState("");

//   const test= 'test'

//   const handleSubmit = (e) => {
//     e.preventDefault();
    

//     // if(formData.username ===''){
//     //   setErrors({error:'this field is required' })
//     // }

// const{target:{value}} = e

//     setFormData(value)

//       let reg = new RegExp ({minLength:5}).test(value)

//       if(!reg){
//         setErrors({error:'Pease enter more letters to your name'})
//       }

//     api
//     .addUser(formData)
//     .then((res) => {

//     //   if (!ValidatorForm.hasValidationRule('isPasswordMatch')) {
//     //     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
//     //         const { formData } = formData.password;
//     //         if (value !== formData.password) {
//     //             return false;
//     //         }
//     //         return true;
//     //     });
//     // }

//     // if (ValidatorForm.hasValidationRule('isPasswordMatch')) {
//     //   ValidatorForm.removeValidationRule('isPasswordMatch');
//     // }




     
//       if (res.data.msg === "Mail exists") {
//         setMailExist(res.data.msg);
//       } 

//     })
//     console.log(formData.username)

//   };

//   console.log(formData);
//   // const { email } = this.state;

//   return (
//     <StylesProvider injectFirst>
//       <ThemeProvider theme={theme}>
//         <Container className={classes.container}>
//           <ValidatorForm
//             //ref="form"
//             onSubmit={handleSubmit}
//             onError={(errors) => console.log(errors)}
//           >
//             {/* username */}
//             <TextField
//               label="User Name"
//               onChange={(e) =>
//                 setFormData({ ...formData, username: e.target.value })
//               }

//               // this is working but not looking nice get a pop up for that
//               // inputProps={{ minLength:4}}
//               // required={true}

//               name="username"
              
              
//               //error={inputProps}
//               //helperText={'Please enter more letters to your name'}
//               error={Boolean(errors?.error)}
//               helperText={errors?.error}
//                value={formData.username}
//              // error={formData.username === ""}
//              // errorMessages={formData.username === "" ? 'this field is required"' : ' '}
//               //  validators={["required"]}
//               //  errorMessages={[           
//               //    "this field is required"]
//               //  }
//             />

//             {/* email */}
//             <TextValidator
//               label="Email"
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               name="email"
//               value={formData.email}
//               error={mailExist}
//               error={Boolean(mailExist)}
//               helperText={mailExist}
//               validators={["required", "isEmail"]}
//               errorMessages={["this field is required", "Email is not valid"]}
//             />
//             {/* password */}
//             <TextValidator
//               label="Password"
//               onChange={(e) =>
//                 setFormData({ ...formData, password: e.target.value })
//               }
//               name="password"
//               type="password"
//               value={formData.password}
//               validators={["required"]}
//               errorMessages={[
//                 "this field is required"
//               ]}
//             />
//              {/* conformPassword */}
//              <TextValidator
//               label="Confirm Password"
//               onChange={(e) =>
//                 setFormData({ ...formData, confirmPassword: e.target.value })
//               }
//               name="confirmPassword"
//               type="password"
//               value={formData.confirmPassword}
//               validators={['isPasswordMatch', 'required']}
//               errorMessages={['password not match', 'this field is required']}
//             />

//             <Button type="submit">Submit</Button>
//           </ValidatorForm>
//         </Container>
//       </ThemeProvider>
//     </StylesProvider>
//   );
// };

// export default Test;


//____________________________________________________________________________________________


// // react
// import React, { useState } from "react";
// import { StylesProvider } from "@material-ui/core/styles";

// //axios
// import * as api from "../../api";

// // css
// import "../../App.css";

// //styles
// import {
//   Container,
//   ThemeProvider,
//   Typography,
//   Button,
//   Avatar,
//   TextField,
// } from "@material-ui/core";

// //styles to use the connection
// import useStyles from "./styles.js";

// //change color as a theme
// import { createMuiTheme } from "@material-ui/core/styles";

// // theme
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: "#18B0C3",
//       main: "#0C9EB5",
//       dark: "#008CA7",
//       contrastText: "#fff",
//     },
//   },
// });

//  const Test = (props) => {
//    const classes = useStyles();

//    const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     macAddress: "",
//   });

// //   const test = "test";

// //   const [banane, setBanane] = useState("");
//  const [errors, setErrors] = useState({ mari: "" });

// //   const { register, formState: { errors }, handleSubmit } = useState();

// const handelChange =(e) =>{

// }

//     const handleSubmit = (e) => {
//       e.preventDefault();

//       if(formData.username === ''){
//         setErrors({mari: 'not required'})
//         console.log('noo')
//       }else{

//         console.log('yeah')
//       }
//       console.log(formData)
// //   //   e.preventDefault();

// //   //    const {target: { value },} = e;

// //   //   setErrors({ mari: "" });
// //   //  // setMailExist(res.data.msg);
// //   //   setBanane(value);

// //   //   let reg = new RegExp(/^\d*$/).test(value);

// //   //   if (!reg) {
// //   //     setErrors({ mari: "fuck it works" });
// //   //   }
//  }

//    return (
//     <StylesProvider injectFirst>
//     <ThemeProvider theme={theme}>
//       <Container className={classes.container}>
//         <div className={classes.paper}>

//         <form className={classes.form} noValidate >
//               <TextField
//               onSubmit={handleSubmit}
//                 onChange={(e) =>
//                   setFormData({ ...formData, username: e.target.value },{handelChange})
//                 }
//                 // test for error
//                 error={Boolean(errors?.mari)}
//                 helperText={errors?.mari}

//                 className={`${classes.inputField}`}
//                 variant="outlined"
//                 required = {true}
//                 maxLenght={4}
//                 id="username"
//                 label="Name"
//                 name="username"
//                 size="small"
//                 InputLabelProps={{
//                   style: { color: "#007982" },
//                 }}
//                  InputProps={{
//                    classes: {
//                      root: classes.root,
//                      focused: classes.focused,
//                      notchedOutline: classes.notchedOutline,
//                    },
//                  }}
//               />
//  <TextField
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//                 //test for error
//                 error={Boolean(errors?.mari)}
//                 helperText={errors?.mari}

//                 className={`${classes.inputField}`}
//                 variant="outlined"
//                 required
//                 id="email"
//                 label="Email"
//                 name="email"
//                 size="small"
//                 InputLabelProps={{
//                   style: { color: "#007982" },
//                 }}
//                  InputProps={{
//                    classes: {
//                      root: classes.root,
//                      focused: classes.focused,
//                      notchedOutline: classes.notchedOutline,
//                    },
//                  }}
//               />
//             </form>
//             <Button
//             className={classes.button}
//                 type="submit"
//                 onClick={handleSubmit}
//                 variant="contained"
//                 color="primary"
//               >
//                 Register
//               </Button>
//         </div>
//         </Container>
//       </ThemeProvider>
//     </StylesProvider>
//   );
//  };

//  export default Test;
