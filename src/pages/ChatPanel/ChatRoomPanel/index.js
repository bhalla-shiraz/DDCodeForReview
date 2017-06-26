import React, { Component } from 'react'
import Header from './Header'
import MessagePanel from './MessagePanel'
import MessageSendPanel from './MessageSendPanel'
import styles from './styles'

class ChatRoomPanel extends Component {
   render() {
      let roomList = ["Business", "Design", "Analytics", "Engineering", "HR", "Operations"]
      return (
         <div style={styles.chatRoomPanel}>
            <Header channel={'Business'}/>
            <MessagePanel />
            <MessageSendPanel />
         </div>
      )
   }
}

export default ChatRoomPanel
