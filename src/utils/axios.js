import axios from "axios";
import env from "../configs/env";

export const axiosInstance = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('token')
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use((response) => {
  return response
}, (error) => {
  if(error.response && [401, 403].includes(error.response.status)){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('account')
    window.location.href = '/login'
  }
  return Promise.reject(error)
})