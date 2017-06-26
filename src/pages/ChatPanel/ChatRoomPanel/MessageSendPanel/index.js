import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.js'
import SendButton from './SendButton'
import {
   sendButtonLabel,
   hintText
} from '../../../../constants/messageSendPanel'
import {
   sendMessage
} from '../../../../redux/actions/roomDetails'

class MessageSendPanel extends Component {
   sendMessage() {
      const { user, roomId, sendMessage, roomName } = this.props
      const message = this.message.value
      if(message !== '') {
         sendMessage(message, user, roomId, roomName);
         this.message.value = ''
      }
   }
   render() {
      return (
         <div style={styles.sendContainer}>
            <input
               style={styles.messageTextField}
               placeholder={hintText}
               ref={(elem) => this.message = elem}
            />
         <SendButton label={sendButtonLabel} sendMessage={() => this.sendMessage()}/>
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   user: state.loginData.user,
   roomId: state.roomDetails.room,
   roomName: state.roomDetails.roomName
})

const mapDispatchToProps = {
   sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSendPanel)
