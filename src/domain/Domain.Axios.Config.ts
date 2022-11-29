import type { AxiosRequestConfig } from 'axios'

export const baseUrl = (hostname: string): string => {
  const host = (import.meta.env.VITE_APP_ENDPOINT || '').toString()

  switch (hostname) {
    case 'localhost' || '127.0.0.1':
      return host
    /* Demo */
    // case "demo.netlify.app":
    //   return host;
    default:
      throw new Error(`${host} api domain is not supported`)
  }
}

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: baseUrl(
    process.env.NODE_ENV === 'test' ? 'localhost' : window.location.hostname,
  ),
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
}
