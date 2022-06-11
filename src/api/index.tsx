import axios from "axios";

export const BASE_URL = "https://personal--diary.herokuapp.com/api";
// https://personal--diary.herokuapp.com/api

const $api = axios.create({
    baseURL: BASE_URL
})

$api.interceptors.request.use((config) => {
    config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
    console.log(config);
    return config;
})

export default $api;