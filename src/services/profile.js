import axios from 'axios'

export const getProfile = (username) => {
   const URL = `http://localhost:8080/api/profile/${username}`
   return axios.get(URL)
}

export const updateProfile = (username, data) => {
   const URL = `http://localhost:8080/api/profile/${username}`
   return axios.post(URL, data)
}
