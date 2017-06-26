import axios from 'axios'

const postMessage = (message, user, room) => {
  const URL = `http://localhost:8080/api/rooms/${room}/messages`
  return axios.post(URL, {
     name: user,
     message: message
  })
}

export default postMessage
