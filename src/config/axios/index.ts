import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `https://${import.meta.env.VITE_APP_API_KEY}.mockapi.io/blog/api/`
})

export default axiosInstance;