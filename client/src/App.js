// react
import React from 'react'

//components
import SignIn from './components/signIn/SignIn.js'
import Welcome from './components/welcome/Welcome.js';
import Navbar from './components/Nav/Navbar.js';
import LogOut from './components/LogOut/LogOut.js';
import Water from './components/Water/Water.js';
import Graph from './Graph.js';

// css
import './App.css';

// import useStyles from "./components/Nav/styles";
// import useStyles from "./components/welcome/styles";
// import useStyles from "./components/signIn/styles";

//react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="app">

        <Route path='/' exact component={SignIn}></Route>
        <Route path='/welcome' component={Welcome}></Route>
        <Route path='/navbar' component={Navbar}></Route>
        <Route path='/logout' component={LogOut}></Route>
        <Route path='/water' component={Water}></Route>
        <Route path='/graph' component={Graph}></Route>
        
      </div>
    </Router>


  );
}

export default App;
