import { updateRoom } from './roomDetails'
import {
   ROOM_LIST_FETCHING,
   ROOM_LIST_LOADED,
   ROOM_LIST_FETCHING_ERROR,
} from 'reduxConstants/roomList'
import getRooms from 'services/getRooms'

export const fetchRoomList = () => {
   return (dispatch) => {
      dispatch(roomListFetching())
      getRooms().then((response) => {
         if(response.status === 200) {
            dispatch(roomListUpdate(response.data))
            dispatch(updateRoom(response.data[0]))
         } else {
            dispatch(roomListFetchError('Room List not found'))
         }
      })
   }
}

const roomListFetching = () => ({
   type: ROOM_LIST_FETCHING
})

const roomListFetchError = () => ({
   type: ROOM_LIST_FETCHING_ERROR
})

const roomListUpdate = (roomList) => ({
   type: ROOM_LIST_LOADED,
   roomList
})
