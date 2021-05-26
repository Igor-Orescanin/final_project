// axios
 import axios from 'axios';

//url to the server connection
const url = 'http://localhost:3005'

//get device
export const fetchDevices =(id) => axios.get(`${url}/devices/${id}`);

//get light
export const fetchLights =(id) => axios.get(`${url}/lights/${id}`);
// add new light
//export const asignDevice = (data) => axios.post(`${url}/users/${data.userId}/assignLight/${data.gpio}`, data);


//add new device
//export const addDevice = (newDevice) => axios.device(url, newDevice);
export const asignDevice = (data) => axios.post(`${url}/users/${data.userId}/assignDevice/${data.serialNumber}`, data);

//delete device
export const deleteDevice = (id) => axios.delete(`${url}/devices/${id}`);

export const loginUser = (data) => axios.post(`${url}/users/login`, data);

export const addUser = (data) => axios.post(`${url}/users`, data);

export const authUser = () => axios.get(`${url}/users/isUser`, {headers: {
    "x-access-token": localStorage.getItem('token')
}});

export const getUser = (id) => axios.get(`${url}/users/${id}`)

export const getWeek = () => axios.get(`${url}/waterFlow/week`)

export const getMonth = () => axios.get(`${url}/waterFlow/month`)
