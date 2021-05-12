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
  
  const test = "test";

  const [banane, setBanane] = useState("");
  const [errors, setErrors] = useState({ mari: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

     const {target: { value },} = e;
   
    setErrors({ mari: "" });
   // setMailExist(res.data.msg);
    setBanane(value);
 
    let reg = new RegExp(/^\d*$/).test(value);

    if (!reg) {
      setErrors({ mari: "fuck it works" });
    }
   }



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
      
    
  
      <Collapse in={banane?.length > 0}>
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
     
    </div>
  );
};

export default Test;
