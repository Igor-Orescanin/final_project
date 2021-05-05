// axios
 import axios from 'axios';

//url to the server connection
const url = 'http://localhost:3005'

//get device
export const fetchDevices =() => axios.get(`${url}/devices`);

//add new device
export const addDevice = (newDevice) => axios.device(url, newDevice);

//delete device
export const deleteDevice = (id) => axios.delete(`${url}/${id}`);

//export const postUser =(newUser) => axios.post(`${url}/users`);








// const instance = axios.create({
//   baseURL: 'http://localhost:3005/'
// })

// export default instance;


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
