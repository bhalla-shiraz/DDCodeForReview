import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateRoom } from 'actions/roomDetails'
import Profile from './Profile'
import UserInfoPanel from './UserInfoPanel'
import RoomList from './RoomList'
import { go } from 'actions/navigate'
import styles from './styles'

class RoomSelectionPanel extends Component {
   constructor(props) {
      super(props)
      this.state={
         timeSinceLoggedIn: this.getTimeDifferenceInMinutes()
      }
   }

   getTimeDifferenceInMinutes() {
      const diff = (new Date().getTime()) - this.props.loginTime
      return  parseInt(diff / 60000)
   }

   updateLoginTime() {
      let diff = this.getTimeDifferenceInMinutes()
      this.setState({timeSinceLoggedIn: diff})
   }

   updateMessages() {
      const { updateRoom, selectedRoom, roomList } = this.props
      updateRoom({
         id: selectedRoom,
         name: roomList[selectedRoom].name
      })
   }

   componentDidMount() {
      this.loadInterval = setInterval(() => this.updateLoginTime(), 60000)
      // in order to make live chats work - auto fetch messages every second
      // this.loadMessages = setInterval(() => this.updateMessages(), 1000)
   }

   componentWillUnmount () {
      this.loadInterval && clearInterval(this.loadInterval)
      this.loadInterval = false
      this.loadMessages && clearInterval(this.loadMessages)
      this.loadMessages = false

   }
   selectRoom(newRoom) {
      const { updateRoom } = this.props
      updateRoom({
         id: parseInt(newRoom.target.id),
         name: newRoom.target.innerHTML
      })
   }

   render() {
      const { user, selectedRoom, roomList, go, url } = this.props
      const { timeSinceLoggedIn } = this.state
      return (
         <div style={styles.roomSelectionPanel}>
            {(url && url.includes('profile')) ? <Profile /> : ''}
            <UserInfoPanel viewProfile={() => go('/chat/profile')} user={user} timeOnline={timeSinceLoggedIn}/>
            <RoomList roomList={roomList} selectedRoom={selectedRoom} selectRoom={(event) => this.selectRoom(event)}/>
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   user: state.loginData.user,
   loginTime: state.loginData.time,
   selectedRoom: state.roomDetails.room,
   roomList: state.roomList || [],
   url: state.navigate.path,
})

const mapDispatchToProps = {
   updateRoom,
   go,
}

RoomSelectionPanel.propTypes = {
   loginTime: PropTypes.number,
   updateRoom: PropTypes.func,
   user: PropTypes.string,
   roomList: PropTypes.array,
   selectedRoom: PropTypes.number,
   go: PropTypes.func,
   url: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomSelectionPanel)
