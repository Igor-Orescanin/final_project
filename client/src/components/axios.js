import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/app/registration'
})

export default instance;