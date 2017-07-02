import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import styles from './styles.js'
import SendButton from './SendButton'
import {
   sendButtonLabel,
   hintText
} from '../../../../constants/messageSendPanel'
import {
   ENTER
} from '../../../../constants/events'
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

   onKeyPress(event) {
      const { key, shiftKey } = event
      const message = this.message.value
      const emptyMessage = !message.match(/\S/)

      if(key === ENTER) {
         if(!emptyMessage) {
            if(shiftKey) {
               this.message.value = message + '\n'
            } else {
               this.sendMessage()
            }
         }

         event.preventDefault()
      }


   }

   render() {
      return (
         <div style={styles.sendContainer}>
            <textarea
               style={styles.messageTextField}
               placeholder={hintText}
               ref={(elem) => this.message = elem}
               onKeyPress={(event) => this.onKeyPress(event)}
            />
         <SendButton
            label={sendButtonLabel}
            sendMessage={() => this.sendMessage()}/>
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

MessageSendPanel.propTypes = {
   user: PropTypes.string,
   roomId: PropTypes.number,
   sendMessage: PropTypes.func,
   roomName: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageSendPanel)
