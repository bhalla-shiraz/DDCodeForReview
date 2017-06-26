import postMessage from '../../services/postMessage'
import getMessages from '../../services/getMessages'
import getMembers from '../../services/getMembers'

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
                  console.log("error");
               }
            })
         } else {
            console.log("error");
         }
      })
   }
}
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
               getMessages(roomId).then((response) => {
                  if(response.status == 200) {
                     dispatch(updateRoomMessages(response.data))
                     getMembers(roomId).then((response) => {
                        if(response.status == 200) {
                           dispatch(updateRoomMembers(response.data.users))
                        } else {
                           console.log("error");
                        }
                     })
                  } else {
                     console.log("error");
                  }
               })
            } else {
               console.log("error");
            }
         })
      }
}
