import { axiosInstance } from "../utils/axios"

const login = (data) => {
  return axiosInstance.post('/auth/login', data);
}

export default {
  login
}