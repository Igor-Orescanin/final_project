// axios
 import axios from 'axios';

//url to the server connection
const url = 'http://localhost:3005'

//user
export const loginUser = (data) => axios.post(`${url}/users/login`, data);
export const addUser = (data) => axios.post(`${url}/users`, data);
export const getUser = (id) => axios.get(`${url}/users/${id}`)
export const authUser = () => axios.get(`${url}/users/isUser`, {headers: {
    "x-access-token": localStorage.getItem('token')
}});

//device
export const fetchDevices =(id) => axios.get(`${url}/devices/${id}`);
export const asignDevice = (data) => axios.post(`${url}/users/${data.userId}/assignDevice/${data.serialNumber}`, data);
export const deleteDevice = (id) => axios.delete(`${url}/devices/${id}`);

//light
export const fetchLights =(id) => axios.get(`${url}/devices/${id}/lights`);
export const addLight = (id, data) => axios.post(`${url}/devices/${id}/lights`, data);
export const deleteLight = (id) => axios.delete(`${url}/devices/${id}/lights`);

//control
export const fetchControls =(id) => axios.get(`${url}/devices/${id}/controls`);
export const addControl = (id, data) => axios.post(`${url}/devices/${id}/controls`, data);
export const deleteControl = (id) => axios.delete(`${url}/devices/${id}/controls`);

//weekly & monthly
export const getWeek = () => axios.get(`${url}/waterFlow/week`)
export const getMonth = () => axios.get(`${url}/waterFlow/month`)

//EmailAlert
export const updateEmailAlert = (id, data) => axios.put(`${url}/devices/${id}`, data);
