
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
    default:
      return state;
  }
}

export default roomDetails
