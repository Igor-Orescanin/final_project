// axios
 import axios from 'axios';

//url to the server connection
const url = 'http://localhost:3005'

//get device
export const fetchDevices =() => axios.get(`${url}/devices`);

//add new device
//export const addDevice = (newDevice) => axios.device(url, newDevice);
export const addDevice = (data) => axios.device(`${url}/devices`, data);

//delete device
export const deleteDevice = (id) => axios.delete(`${url}/${id}`);

export const loginUser = (data) => axios.post(`${url}/users/login`, data);

export const addUser = (data) => axios.post(`${url}/users`, data);

export const authUser = () => axios.get(`${url}/users/isUser`, {headers: {
    "x-access-token": localStorage.getItem('token')
}});
