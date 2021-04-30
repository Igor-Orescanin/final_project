
 import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://maritza.localhost:3005/'
})

export default instance;





/* 
import Axios from "axios";


Axios({
    method: "POST",
    url: "http://maritza.localhost:3005/registration",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });
    */