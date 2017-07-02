import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import UserInfoPanel from './UserInfoPanel'
import RoomList from './RoomList'
import { updateRoom } from '../../../redux/actions/roomDetails'
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
      this.loadInterval = setInterval(() => this.updateLoginTime(), 60000);
      this.loadMessages = setInterval(() => this.updateMessages(), 1000);
   }

   componentWillUnmount () {
      this.loadInterval && clearInterval(this.loadInterval);
      this.loadInterval = false;
      this.loadMessages && clearInterval(this.loadMessages);
      this.loadMessages = false;

   }
   selectRoom(newRoom) {
      const { updateRoom } = this.props
      updateRoom({
         id: newRoom.target.id,
         name: newRoom.target.innerHTML
      })
   }

   render() {
      // let roomList = ["Business", "Design", "Analytics", "Engineering", "HR", "Operations"]
      const { user, selectedRoom, roomList } = this.props
      const { timeSinceLoggedIn } = this.state
      return (
         <div style={styles.roomSelectionPanel}>
            <UserInfoPanel user={user} timeOnline={timeSinceLoggedIn}/>
            <RoomList roomList={roomList} selectedRoom={selectedRoom} selectRoom={(event) => this.selectRoom(event)}/>
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   user: state.loginData.user,
   loginTime: state.loginData.time,
   selectedRoom: state.roomDetails.room,
   roomList: state.roomList
})

const mapDispatchToProps = {
   updateRoom
}

RoomSelectionPanel.propTypes = {
   loginTime: PropTypes.number,
   updateRoom: PropTypes.func,
   user: PropTypes.string,
   roomList: PropTypes.array,
   selectedRoom: PropTypes.number,
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomSelectionPanel)
