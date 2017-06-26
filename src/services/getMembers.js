import axios from 'axios'

const getMembers = (room) => {
  const URL = `http://localhost:8080/api/rooms/${room}`
  return axios.get(URL)
}

export default getMembers
