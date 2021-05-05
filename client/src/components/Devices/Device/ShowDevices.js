// react
import React, { useState, useEffect } from "react";

// axios
import * as api from "../../../api";

//connection to components
import Device from "./Device.js";

// styles to use the connection
import useStyles from "./styles";

// css
import "../../../App.css";

// material-ui
import {

  CircularProgress
} from "@material-ui/core";

//change color as a theme
import { createMuiTheme } from "@material-ui/core/styles";

//theme for the color
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#18B0C3",
      main: "#0C9EB5",
      dark: "#008CA7",
      contrastText: "#fff",
    },
    secondary: {
      light: "#18B0C3",
      main: "##fff",
      dark: "#008CA7",
      contrastText: "#0C9EB5",
    },
  },
});

const ShowDevices = (props) => {
  //for routes
  const { history } = props;

  //for styles
  const classes = useStyles();


  //-------------get data--------

  //a hook
  const [allDevices, setAllDevices] = useState([
  //   {
  //   deviceId:'',
  //   deviceName:'',
  // }
]);


  // to get the data for databace
  useEffect(async () => {
    const { data } = await api.fetchDevices()
   
      setAllDevices(data)
   
    console.log(data);
    console.log(data[1].deviceId);
    console.log(data[1].deviceName);


  },[allDevices]);

  console.log(allDevices)

  return (

    !allDevices.length ? <CircularProgress/> : (
      <div>
       {allDevices.map( dev =>(
         <Device/>
          // <Device value={deviceName}/>
        ))}
      </div>
    )

//       {/* <div>
//         {allDevices.length > 0 && allDevices.map(e => <Device/>)}
//       </div> */}


// {/*             
// alldevices.map(dev => {
//   return (
//     <div>
//     <Device value={dev.use}/>
//     </div>
//   )
// } )  */}




  )
};

export default ShowDevices;
