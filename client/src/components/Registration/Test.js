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
  Collapse,
} from "@material-ui/core";

//styles to use the connection
//import useStyles from "./styles.js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Test = (props) => {
  const classes = useStyles();
  const { history } = props;

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    macAddress: "",
  });

  const test = "test";

  const[mailExist, setMailExist] = useState('')
  const [banane, setBanane] = useState("");
  // const[mailExist,setMailExist] = useState ()
  const [errors, setErrors] = useState({ mari: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

     const {
       target: { value },
     } = e;
   api.addUser(formData)
   .then((res)=>{


    setErrors({ mari: "" });
    setMailExist(res.data.msg);
    setBanane(value);
    // setMailExist(res.data.msg)

    let reg = new RegExp(/^\d*$/).test(value);

    if (!reg) {
      setErrors({ mari: "fuck it works" });
    }
   })

    
    // setErrors({ mari: "" });
    // setMailExist(res.data.msg);
    // setBanane(value);
    // // setMailExist(res.data.msg)

    // let res = new RegExp(/^\d*$/).test(value);

    // if (!res) {
    //   setErrors({ mari: "fuck it works" });
    // }


  };

  return (
    <div style={{ margin: "20px" }}>
         <TextField
        onChange={handleSubmit}
        error={Boolean(errors?.mari)}
        required
        id="test"
        label="test"
        name="test"
        size="small"
        value={banane}
        helperText={errors?.mari}
        variant="outlined"
      />
        <form noValidate onSubmit={handleSubmit}>
      <TextField
         onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        error={Boolean(errors?.mari)}
        required
        id="email"
        label="Email"
        name="email"
        size="small"
        value={mailExist}
        helperText={errors?.mari}
        variant="outlined"
      />
      <TextField
        onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        error={Boolean(errors?.password)}
        id="password"
        // value={password}
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
        helperText={errors?.password}
      />
      <Collapse in={mailExist?.length > 0}>
        <Button>test</Button>
      </Collapse>
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
    </div>
  );
};

export default Test;
