import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.js'
import {
   joinButtonLabel
} from '../../constants/Welcome'
import RoomSelectionPanel from './RoomSelectionPanel'
import ChatRoomPanel from './ChatRoomPanel'
import { fetchRoomList } from '../../redux/actions/roomList'
import { go } from '../../redux/actions/navigate'
class ChatPanel extends Component {
   constructor(props) {
      super(props)
   }

   componentWillMount() {
      const { fetchRoomList, user } = this.props
      if(!user) go('/')
      fetchRoomList()

   }

   render() {
      return (
         <div>
            <RoomSelectionPanel />
            <ChatRoomPanel />
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   user: state.loginData.user
})

const mapDispatchToProps = {
   fetchRoomList,
   go
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatPanel)
