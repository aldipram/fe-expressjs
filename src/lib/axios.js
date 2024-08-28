const { default: axios } = require("axios");

export const axiosInstance = axios.create({
    baseURL: "http://localhost:2000"
});