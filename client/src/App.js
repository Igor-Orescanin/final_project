<<<<<<< HEAD

import React from 'react'
import SignIn from './components/SignIn.js'
import { useState, useEffect } from "react";
import Chart from 'react-apexcharts'
import io from "socket.io-client";

import './App.css';
import useStyles from "./components/styles";
const ENDPOINT = "http://25.55.90.80:3000";
const socket = io(ENDPOINT,{ transports: ["websocket","polling"] });

=======
// react
import React from "react";

//components
import LogIn from "./components/LogIn/LogIn.js";
import Registration from "./components/Registration/Registration.js";
import Welcome from "./components/Welcome/Welcome.js";
import Navbar from "./components/Nav/Navbar.js";
import LogOut from "./components/LogOut/LogOut.js";
import Water from "./components/Water/Water.js";
import Setting from "./components/Setting/Setting.js";
import AddDevice from "./components/AddDevice/AddDevice.js";
import Device from "./components/Device/Device.js";
import RegDevice from "./components/RegDevice/RegDevice.js";
import Graph from "./Graph.js";


// css
import "./App.css";


//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> 7f80649d5ef6a1a0c1349a20fd761b58b78a68f5

function App() {

  const [response, setResponse] = useState("");
  useEffect(() => {
    
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={LogIn}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/welcome" component={Welcome}></Route>
        <Route path="/navbar" component={Navbar}></Route>
        <Route path="/logout" component={LogOut}></Route>
        <Route path="/water" component={Water}></Route>
        <Route path="/setting" component={Setting}></Route>
        <Route path="/adddevice" component={AddDevice}></Route>
        <Route path="/device" component={Device}></Route>
        <Route path="/regdevice" component={RegDevice}></Route>
        <Route path="/graph" component={Graph}></Route>
      </div>
    </Router>
  );
}

export default App;
