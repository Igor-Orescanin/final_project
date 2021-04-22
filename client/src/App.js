import React from 'react'
import SignIn from './components/SignIn.js'
import Welcome from './components/Welcome';
import './App.css';
import useStyles from "./components/styles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  
  return (
<Router>
   <div className="App">
     <Switch>
     <Route path='/'>
          <SignIn />
        </Route>
        <Route path='/welcome'>
          <Welcome/>
        </Route>
     
     </Switch>
      
    </div>
</Router>

   
  );
}

export default App;
