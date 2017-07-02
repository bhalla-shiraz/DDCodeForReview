import axios from 'axios'

const getMessages = (room) => {
  const URL = `http://localhost:8080/api/rooms/${room}/messages`
  return axios.get(URL)
}

export default getMessages
