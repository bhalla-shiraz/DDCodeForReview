import postMessage from '../../services/postMessage'
import getMessages from '../../services/getMessages'
import getMembers from '../../services/getMembers'
import postReaction from '../../services/postReaction'

export const updateRoom = (room) => {
   return (dispatch) => {
      dispatch(updateRoomData(room.id, room.name))
      getMessages(room.id).then((response) => {
         if(response.status == 200) {
            dispatch(updateRoomMessages(response.data))
            getMembers(room.id).then((response) => {
               if(response.status == 200) {
                  dispatch(updateRoomMembers(response.data.users))
               } else {
                  roomMessagesFetchError('error getting members')
               }
            })
         } else {
            roomMessagesFetchError('error getting messages')
         }
      })
   }
}

const roomMessagesFetchError = (error) => ({
   type: 'ROOM_MESSAGES_FETCH_ERROR',
   error,
})

const updateRoomMessages = (roomMessages) => ({
   type: 'UPDATE_ROOM_MESSAGES',
   roomMessages,
})
const updateRoomMembers = (roomMembers) => ({
   type: 'UPDATE_ROOM_MEMBERS',
   roomMembers
})
const updateRoomData = (room, roomName) => ({
   type: 'UPDATE_ROOM_DATA',
   room,
   roomName
})
export const sendMessage = (message, user, roomId, roomName) => {
      return (dispatch) => {
         postMessage(message, user, roomId).then((response) => {
            if(response.status == 200) {
               dispatch(updateRoom({
                  id: roomId,
                  name: roomName,
               }))
            } else {
               roomMessagesFetchError('error submitting message')
            }
         })
      }
}

export const updateReaction = (roomId, messageId, reaction, roomName) => {
      return (dispatch) => {
         postReaction(roomId, messageId, reaction).then((response) => {
            if(response.status == 200) {
               dispatch(updateRoom({
                  id: roomId,
                  name: roomName,
               }))
            } else {
               roomMessagesFetchError('error updating reaction')
            }
         })
      }
}
