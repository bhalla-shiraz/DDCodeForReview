import axios from 'axios'

const postReaction = (roomId, messageId, reaction) => {
  const URL = `http://localhost:8080/api/rooms/${roomId}/messages/${messageId}`
  return axios.post(URL, {
     reaction,
  })
}

export default postReaction
