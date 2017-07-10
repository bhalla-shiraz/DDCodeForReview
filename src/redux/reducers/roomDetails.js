
const roomDetails = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_ROOM_DATA':
      return {
         ...state,
         room: action.room,
         roomName: action.roomName
      }
    case 'UPDATE_ROOM_MESSAGES':
      return {
         ...state,
         messages: action.roomMessages
      }
    case 'UPDATE_ROOM_MEMBERS':
     return {
        ...state,
        members: action.roomMembers
     }
    case 'ROOM_MESSAGES_FETCH_ERROR':
      return {
         ...state
      }
    default:
      return state
  }
}

export default roomDetails
