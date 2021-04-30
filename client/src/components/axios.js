import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://maritza.localhost:4000/app/registration'
})

export default instance;




/* 
import Axios from "axios";


Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });
   */