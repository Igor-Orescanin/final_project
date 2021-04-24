import React from 'react'
import SignIn from './components/signIn/SignIn.js'
import Welcome from './components/welcome/Welcome.js';
import Navbar from './components/Nav/Navbar.js';
import './App.css';
// import useStyles from "./components/Nav/styles";
// import useStyles from "./components/welcome/styles";
// import useStyles from "./components/signIn/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">

        <Route path='/' exact component={SignIn}></Route>
        <Route path='/welcome' component={Welcome}></Route>
        <Route path='/navbar' component={Navbar}></Route>

      </div>
    </Router>


  );
}

export default App;
