import type { AxiosInstance } from 'axios'
import axios from 'axios'

const service: AxiosInstance = axios.create({
  baseURL: '/',
  withCredentials: true
})

service.interceptors.request.use((config) => {
  config.params = config.params || {}
  return config
}, (error) => {
  return Promise.reject(error)
})

service.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

export default service
