import axios from 'axios'

const getRooms = () => {
  const URL = `http://localhost:8080/api/rooms`
  return axios.get(URL)
}

export default getRooms
