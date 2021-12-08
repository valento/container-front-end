import axios from 'axios'

export const setAuthHeader = ( token = null ) => {
  if(token) {
    axios.defaults.headers.common['Authorization'] = token
  } else {
    delete axios.defaults.headers.common['Authorization']
  }
}

export const setAPI = (API_HOST) => {
  axios.defaults.baseURL = `${API_HOST}`
}
