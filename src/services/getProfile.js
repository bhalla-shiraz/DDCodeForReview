import axios from 'axios'

const getProfile = (username) => {
   const URL = `http://localhost:8080/api/profile/${username}`
   return axios.get(URL)
}

export default getProfile
