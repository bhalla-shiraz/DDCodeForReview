import React from 'react'
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

export default RoomList
