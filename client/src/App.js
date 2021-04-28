
import React from 'react'
import SignIn from './components/SignIn.js'
import React, { useState, useEffect } from "react";
import Chart from 'react-apexcharts'
import io from "socket.io-client";
const ENDPOINT = "http://25.55.90.80:3000";
import './App.css';
import useStyles from "./components/styles";

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
