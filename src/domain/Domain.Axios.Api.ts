import { axiosRequestConfiguration } from './Domain.Axios.Config'
import initializeAxios from './Domain.Axios.Setup'

export const axiosInstance = initializeAxios(axiosRequestConfiguration)
