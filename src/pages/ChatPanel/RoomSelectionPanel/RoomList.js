import React, { PropTypes } from 'react'
import styles from './styles'

const RoomTab = ({room, selectedRoom, selectRoom}) => {
   return (<div
      id={room.id}
      style={(selectedRoom == room.id) ? styles.selectedRoomTab : styles.roomTab}
      onClick={(event) => selectRoom(event)}
      >
      {room.name}
   </div>)
}

const RoomList = ({ roomList, selectedRoom, selectRoom }) => (
   <div style={styles.roomList}>
      {roomList.map((room) => <RoomTab key={room.id} room={room} selectedRoom={selectedRoom} selectRoom={selectRoom} />)}
   </div>
)

RoomList.propTypes = {
   roomList: PropTypes.array,
   selectedRoom: PropTypes.number,
   selectRoom: PropTypes.func,
}

RoomTab.propTypes = {
   room: PropTypes.object,
   selectedRoom: PropTypes.number,
   selectRoom: PropTypes.func,

}

export default RoomList
