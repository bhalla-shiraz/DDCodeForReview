
const roomList = (state = '', action) => {
   switch (action.type) {
    case 'UPDATE_ROOM_LIST':
      return action.roomList
    default:
      return state;
  }
}

export default roomList
