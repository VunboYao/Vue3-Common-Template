import type { AxiosRequestConfig } from 'axios'

import service from '@/api/request/service'

export default <T>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    service.request<T>(config).then((res) => {
      resolve(res.data)
    }, (err) => {
      reject(err)
    })
  })
}
