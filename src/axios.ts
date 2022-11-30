import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
    baseURL: 'https://expresssampleapi.onrender.com',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosClient;