import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
    baseURL: 'https://expresssampleapi.onrender.com',
    headers: {
        'Content-Type': 'application/json'
    }
});