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

export const loginUser = (data) => axios.post(`${url}/users/login`, data);

export const authUser = () => axios.get(`${url}/users/isUser`, {headers: {
    "x-access-token": localStorage.getItem('token')
}});



export const get7days = () => axios.get(`${url}/7days`)
