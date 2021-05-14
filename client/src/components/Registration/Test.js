// react
import React, { useEffect, useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";

//validator
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

//axios
import * as api from "../../api";

//styles
import { Container, ThemeProvider, Button } from "@material-ui/core";

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

//---------------------------------------------start
const Test = (props) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword:"",
  });

  // const handleChange = (event) => {
  //   const email = event.target.value;
  //   const username = event.target.value;
  //   setFormData({ email, username });
  // };

  const [errors, setErrors] = useState({error:''});

  const [mailExist, setMailExist] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();


    // if(formData.username ===''){
    //   setErrors({error:'this field is required' })
    // }



    api
    .addUser(formData)
    .then((res) => {

      if (!ValidatorForm.hasValidationRule('isPasswordMatch')) {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            const { formData } = formData.password;
            if (value !== formData.password) {
                return false;
            }
            return true;
        });
    }

    if (ValidatorForm.hasValidationRule('isPasswordMatch')) {
      ValidatorForm.removeValidationRule('isPasswordMatch');
    }




     
      if (res.data.msg === "Mail exists") {
        setMailExist(res.data.msg);
      } 

    })
    console.log(formData.username)

  };

  console.log(formData);
  // const { email } = this.state;

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Container className={classes.container}>
          <ValidatorForm
            //ref="form"
            onSubmit={handleSubmit}
            onError={(errors) => console.log(errors)}
          >
            {/* username */}
            <TextValidator
              label="User Name"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }

              // this is working but not looking nice get a pop up for that
              // inputProps={{ minLength:4}}
              // required={true}

              name="name"

              //error={inputProps}
              //helperText={'Please enter more letters to your name'}
              // error={Boolean(errors?.error)}
              // helperText={errors?.error}
              // value={formData.username}
             // error={formData.username === ""}
             // errorMessages={formData.username === "" ? 'this field is required"' : ' '}
               validators={["required", "isName"]}
               errorMessages={[
                 "this field is required"
               ]}
            />

            {/* email */}
            <TextValidator
              label="Email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              name="email"
              value={formData.email}
              error={mailExist}
              error={Boolean(mailExist)}
              helperText={mailExist}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "Email is not valid"]}
            />
            {/* password */}
            <TextValidator
              label="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              name="password"
              type="password"
              value={formData.password}
              validators={["required"]}
              errorMessages={[
                "this field is required"
              ]}
            />
             {/* conformPassword */}
             <TextValidator
              label="Confirm Password"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              validators={['isPasswordMatch', 'required']}
              errorMessages={['password not match', 'this field is required']}
            />

            <Button type="submit">Submit</Button>
          </ValidatorForm>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Test;

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
