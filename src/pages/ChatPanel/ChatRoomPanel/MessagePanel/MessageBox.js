import React, { PropTypes } from 'react'
import styles from './styles'

const MessageBox = ({messageData, username}) => {
   const selfWritten = (username === messageData.name)
   return (
      <div style={styles.messageContainer}>
         <div style={(selfWritten) ? styles.messageTextFromUser : styles.messageText}>
            {messageData.message
               .split('\n')
               .map((messageLine, key) => (<span key={key}>{messageLine}<br/></span>))
            }
         </div>
         <div style={styles.messageAuthor}>
            {(selfWritten)? '' : messageData.name}
         </div>
      </div>
   )
}

MessageBox.propTypes = {
   messageData: PropTypes.object,
   username: PropTypes.string
}

export default MessageBox
