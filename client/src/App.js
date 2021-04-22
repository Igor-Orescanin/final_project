import React from 'react'
import SignIn from './components/SignIn.js'
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import './App.css';
import useStyles from "./components/styles";
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
