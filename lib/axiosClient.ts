import axios from "axios";
const axiosClient = axios.create({
    baseURL: process.env.backend_url,
    withCredentials: true
});

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient