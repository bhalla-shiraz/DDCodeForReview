import {
   ROOM_LIST_LOADED,
} from 'reduxConstants/roomList'

const roomList = (state = '', action) => {
   switch (action.type) {
   case ROOM_LIST_LOADED:
     return action.roomList
    default:
      return state
  }
}

export default roomList
