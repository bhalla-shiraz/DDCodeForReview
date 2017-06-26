import { updateRoom } from './roomDetails'
export const fetchRoomList = () => {
   const roomList = getRoomList()
   return (dispatch) => {
      dispatch(updateRoomList(roomList))
      dispatch(updateRoom(roomList[0]))
   }
}

const getRoomList = (room) => {

   return [{"name":"Tea Chats","id":0},{"name":"Coffee Chats","id":1}]
}

const updateRoomList = (roomList) => ({
   type: 'UPDATE_ROOM_LIST',
   roomList
})
