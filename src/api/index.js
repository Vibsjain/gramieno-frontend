import axios from "axios";

const api = axios.create({
    baseURL: "https://gramieno-backend.onrender.com/api",
});

export default api;
