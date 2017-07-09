import React, { Component } from 'react'
import Header from './Header'
import MessagePanel from './MessagePanel'
import MessageSendPanel from './MessageSendPanel'
import styles from './styles'

class ChatRoomPanel extends Component {
   render() {
      return (
         <div style={styles.chatRoomPanel}>
            <Header />
            <MessagePanel />
            <MessageSendPanel />
         </div>
      )
   }
}

export default ChatRoomPanel
