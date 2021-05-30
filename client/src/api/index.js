// axios
 import axios from 'axios';

//url to the server connection
const url = 'http://localhost:3005'

//get device
export const fetchDevices = (id) => axios.get(`${url}/devices/${id}`, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
});

//get light
export const fetchLights = (id) => axios.get(`${url}/devices/${id}/lights`, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
});
// add new light
export const addLight = (id, data) => axios.post(`${url}/devices/${id}/lights`, data, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
});


//add new device
//export const addDevice = (newDevice) => axios.device(url, newDevice);
export const asignDevice = (data) => axios.post(`${url}/users/${data.userId}/assignDevice/${data.serialNumber}`, data, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
});

//delete device
export const deleteDevice = (id) => axios.delete(`${url}/devices/${id}`, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
});

export const loginUser = (data) => axios.post(`${url}/users/login`, data);

export const addUser = (data) => axios.post(`${url}/users`, data, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
});

export const authUser = () => axios.get(`${url}/users/isUser`, {headers: {
    "x-access-token": localStorage.getItem('token')
}});

export const getUser = (id) => axios.get(`${url}/users/${id}`, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
})

export const getWeek = () => axios.get(`${url}/waterFlow/week`, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
})

export const getMonth = () => axios.get(`${url}/waterFlow/month`, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
})

export const updateEmailAlert = (id, data) => axios.put(`${url}/devices/${id}`, data, {
    headers: {
        "x-access-token": localStorage.getItem('token')
    }
});

export const logout = (data) => axios.get(`${url}/users/logout`, data)
