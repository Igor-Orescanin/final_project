
// react
import React, { useState, useEffect } from "react";

//components
import LogIn from "./components/LogIn/LogIn.js";
import Registration from "./components/Registration/Registration.js";
import Welcome from "./components/Welcome/Welcome.js";
import NavbarSec from "./components/Nav/NavbarSec";
import LogOut from "./components/LogOut/LogOut.js";
import Water from "./components/Water/Water.js";
import Setting from "./components/Setting/Setting.js";
import AddDevice from "./components/AddDevice/AddDevice.js";
import Devices from "./components/Devices/Devices.js";
import RegDevice from "./components/RegDevice/RegDevice.js";
import Graph from "./Graph.js";
import Device from "./components/Devices/Device/Device.js";
import Test from "./components/Registration/Test.js";
import Weekly from './components/History/Weekly/Weekly.js'
import Monthly from './components/History/Monthly/Monthly.js'
import Light from "./components/Lights/Light.js";
import EmailAlert from "./components/Setting/EmailAlert/EmailAlert.js";

//socket
import io from 'socket.io-client';


// css
import "./App.css";


//react-router-dom
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {


  const [response, setResponse] = useState({});

  const fetchUser = (user) => {
    setResponse(user)
    console.log(response)
  }

  useEffect(() => {


  }, [response]);

  if (response._id) {

    return (
      <Router>
        <div className="app">
          <NavbarSec username={response.username} />
          <Route path="/welcome" component={Welcome}></Route>
          <Route path="/logout" component={LogOut}></Route>
          <Route path="/water" component={Water}></Route>
          <Route path="/setting" component={Setting}></Route>
          <Route path="/adddevice" render={(props) => <AddDevice {...props} userId={response._id} />}></Route>
          <Route path="/devices" render={(props) => <Devices {...props} userId={response._id} username={response.username} />}></Route>
          <Route path="/regdevice" component={RegDevice}></Route>
          <Route path="/graph" component={Graph}></Route>
          <Route path="/device" component={Device}></Route>
          <Route path="/test" component={Test}></Route>
          <Route path="/weekly" component={Weekly}></Route>
          <Route path="/monthly" component={Monthly}></Route>
          <Route path="/light" component={Light}></Route>
          <Route path="/emailalert" component={EmailAlert}></Route>
        </div>
      </Router>
    );
  }


  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={LogIn}></Route>
        <Route path="/registration" render={(props) => <Registration {...props} fetchUser={fetchUser} />}></Route>
        {/* <Route path="/registration" component={Registration}></Route> */}

      </div>
    </Router>
  );
}

export default App;
