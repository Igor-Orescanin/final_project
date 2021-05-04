
import React from 'react'
import SignIn from './components/SignIn.js'
import { useState, useEffect } from "react";
import Chart from 'react-apexcharts'
import io from "socket.io-client";

import './App.css';
import useStyles from "./components/styles";
const ENDPOINT = "http://25.55.90.80:3000";
const socket = io(ENDPOINT,{ transports: ["websocket","polling"] });


function App() {

  const [response, setResponse] = useState("");
  useEffect(() => {
    
    socket.on("FromAPI", data => {
      setResponse(data);
    });
  }, []);
  return (
    <div className="App">
      <SignIn/>
    </div>
  );
}

export default App;
