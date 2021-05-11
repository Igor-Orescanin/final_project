
// react
import React, { useState, useEffect } from "react";

//components
import LogIn from "./components/LogIn/LogIn.js";
import Registration from "./components/Registration/Registration.js";
import Welcome from "./components/Welcome/Welcome.js";
import Navbar from "./components/Nav/Navbar.js";
import LogOut from "./components/LogOut/LogOut.js";
import Water from "./components/Water/Water.js";
import Setting from "./components/Setting/Setting.js";
import AddDevice from "./components/AddDevice/AddDevice.js";
import Devices from "./components/Devices/Devices.js";
import RegDevice from "./components/RegDevice/RegDevice.js";
import Graph from "./Graph.js";
import Device from "./components/Devices/Device/Device.js";
import Weekly from './components/History/Weekly/Weekly.js'
import Monthly from './components/History/Monthly/Monthly.js'

//import io from 'socket.io-client';


// css
import "./App.css";


//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import io from 'socket.io-client';

const socket = io('http://localhost:3005', {
  transports: ['websocket', 'polling']
});


function App() {
const socket = io('http://localhost:3005', {
  transports: ['websocket', 'polling']
});

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
        <Route path="/devices" component={Devices}></Route>
        <Route path="/regdevice" component={RegDevice}></Route>
        <Route path="/graph" component={Graph}></Route>
        <Route path="/device" component={Device}></Route>
        <Route path="/weekly" component={Weekly}></Route>
        <Route path="/monthly" component={Monthly}></Route>

      
      </div>
    </Router>
  );
}

export default App;
