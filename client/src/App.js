// react
import React from "react";

//components
import LogIn from "./components/LogIn/LogIn.js";
import Registration from "./components/Registrationsdf/Registration.js";
import Welcome from "./components/Welcome/Welcome.js";
import Navbar from "./components/Nav/Navbar.js";
import LogOut from "./components/LogOut/LogOut.js";
import Water from "./components/Water/Water.js";
import Graph from "./Graph.js";


// css
import "./App.css";


//react-router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={LogIn}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/welcome" component={Welcome}></Route>
        <Route path="/navbar" component={Navbar}></Route>
        <Route path="/logout" component={LogOut}></Route>
        <Route path="/water" component={Water}></Route>
        <Route path="/graph" component={Graph}></Route>
      </div>
    </Router>
  );
}

export default App;
