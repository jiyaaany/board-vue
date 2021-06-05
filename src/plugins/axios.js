import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:8000/',
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 1000,
});

instance.interceptors.response.use(
    response => response.data, 
    error => Promise.reject(error)
);

export default instance;