import React from 'react'
import styles from './styles'

const MessageBox = ({messageData, username}) => {
   const selfWritten = (username === messageData.name)
   return (
      <div style={styles.messageContainer}>
         <div style={(selfWritten) ? styles.messageTextFromUser : styles.messageText}>
            {messageData.message}
         </div>
         <div style={styles.messageAuthor}>
            {(selfWritten)? '' : messageData.name}
         </div>
      </div>
   )
}

export default MessageBox
