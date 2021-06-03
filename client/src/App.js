// react
import React, { useState } from "react";

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
//import Device from "./components/Devices/Device/Device.js";
import Weekly from "./components/History/Weekly/Weekly.js";
import Monthly from "./components/History/Monthly/Monthly.js";
//import Light from "./components/Lights/Light/Light";
import EmailAlert from "./components/Setting/EmailAlert/EmailAlert";
import Lights from "./components/Lights/Lights";
import AddLight from "./components/AddLight/AddLight.js";
import AddControl from "./components/AddControl/AddControl.js";
//import Control from "./components/Controls/Control/Control.js";
import Controls from "./components/Controls/Controls.js";
import Conditions from "./components/Setting/SettingChild/Conditions/Conditions.js";
import Impressum from "./components/Setting/SettingChild/Impressum/Impressum.js";
import Privacy from "./components/Setting/SettingChild/Privacy/Privacy.js";



// css
import "./App.css";

//react-router-dom
import { Route, Switch } from "react-router-dom";

//socket
import io from "socket.io-client";



function App() {

  const [response, setResponse] = useState({});
  const fetchUser = (user) => {

    setResponse(user);
    console.log(response);
  };

  const [device, setDevice] = useState({});
  const fetchDevice = (device) => {
    setDevice(device)
    console.log(device)
  }
  console.log("deviceId", device._id);
  console.log("userId", response._id);

  const ENDPOINT = "http://localhost:3005";
  const socket = io(ENDPOINT, { transports: ["websocket", "polling"] });


  return (
    <Switch>
      <div className="app">
        <Route path="/" exact render={(props) => <LogIn {...props} fetchUser={fetchUser} userId={response._id} />}></Route>
        <Route path="/registration" render={(props) => <Registration {...props} fetchUser={fetchUser} />}></Route>
        <Route path="/welcome" render={(props) => <Welcome {...props} device={device} username={response.username} socket={socket}/>}></Route>
        <Route path="/logout" component={LogOut}></Route>
        <Route path="/water" render={(props) => <Water {...props} device={device} username={response.username} />}></Route>
        <Route path="/weekly" component={Weekly}></Route>
        <Route path="/monthly" component={Monthly}></Route>
        <Route path="/setting" render={(props) => <Setting {...props} username={response.username} />}></Route>

        <Route path="/addhub" render={(props) => <AddDevice {...props} userId={response._id} username={response.username} />}></Route>
        <Route path="/hubs" render={(props) => <Devices {...props} userId={response._id} username={response.username} fetchDevice={fetchDevice} user={response} />}></Route>
        <Route path="/emailalert" render={(props) => <EmailAlert {...props} device={device} username={response.username} />}></Route>

        <Route path="/lights" render={(props) => <Lights {...props} device={device} username={response.username} socket={socket}/>}></Route>
        <Route path="/addlight" render={(props) => <AddLight {...props} device={device} username={response.username} socket={socket}/>}></Route>

        <Route path="/devices" render={(props) => <Controls {...props} device={device} username={response.username} socket={socket}/>}></Route>
        <Route path="/adddevice" render={(props) => <AddControl {...props} device={device} username={response.username}/>}></Route>

        <Route path="/conditions" component={Conditions}></Route>
        <Route path="/impressum" component={Impressum}></Route>
        <Route path="/privacy" component={Privacy}></Route>

      </div>
    </Switch>

  );

}

export default App;