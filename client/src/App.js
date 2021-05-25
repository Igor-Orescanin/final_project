
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
import Device from "./components/Devices/Device/Device.js";
import Weekly from './components/History/Weekly/Weekly.js'
import Monthly from './components/History/Monthly/Monthly.js'
import Light from "./components/Lights/Light/Light";
import EmailAlert from "./components/Setting/EmailAlert/EmailAlert";
import Lights from "./components/Lights/Lights";
import AddLight from "./components/AddLight/AddLight.js";
import AddControl from "./components/AddControl/AddControl.js";
import Control from "./components/Controls/Control/Control.js";
import Controls from "./components/Controls/Controls.js"

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
  
    if (response._id) {

  return (
    <Router>
      <div className="app">
        <Navbar username={response.username} />
        <Route path="/welcome" component={Welcome}></Route>
        <Route path="/logout" component={LogOut}></Route>
        <Route path="/water" component={Water}></Route>
        <Route path="/setting" component={Setting}></Route>
        <Route path="/adddevice" render={(props) => <AddDevice {...props} userId={response._id} />}></Route>
        <Route path="/devices" render={(props) => <Devices {...props} userId={response._id} username={response.username} />}></Route>
        <Route path="/graph" component={Graph}></Route>
        <Route path="/device" component={Device}></Route>
        <Route path="/weekly" component={Weekly}></Route>
        <Route path="/monthly" component={Monthly}></Route>
        <Route path="/light" component={Light}></Route>
        <Route path="/emailalert" component={EmailAlert}></Route>
        <Route path="/lights" component={Lights}></Route>
        <Route path="/addlight" component={AddLight}></Route>
        <Route path="/addcontrol" component={AddControl}></Route>
        <Route path="/control" component={Control}></Route>
        <Route path="/controls" component={Controls}></Route>


      </div>
    </Router>

  );  


    }
 
 
   return (
     <Router>
       <div className="app">
         <Route path="/" exact render={(props) => <LogIn {...props} fetchUser={fetchUser} />}></Route>
         <Route path="/registration" render={(props) => <Registration {...props} fetchUser={fetchUser} />}></Route>
       </div>
     </Router>
   ); 

}

export default App;
