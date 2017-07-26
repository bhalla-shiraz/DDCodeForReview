import React, { PropTypes } from 'react'
import styles from './styles'
import { getEmoticons } from 'utils/getEmoticons'

const MessageBox = ({messageData, username, updateReaction}) => {
   const selfWritten = (username === messageData.name)
   return (
      <div style={styles.messageContainer}>
         <div style={(selfWritten) ? styles.messageTextFromUser : styles.messageText}>
            {messageData.message
               .split('\n')
               .map((messageLine, key) => (<span key={key}>{messageLine}<br/></span>))
            }
            <div>
               {
                  (messageData.reaction) ? ':)' : ''
               }
               <button onClick={() => updateReaction(messageData.id, messageData.reaction)}>+</button>
            </div>
         </div>
         <div style={styles.messageAuthor}>
            {(selfWritten)? '' : messageData.name}
         </div>
      </div>
   )
}

MessageBox.propTypes = {
   messageData: PropTypes.object,
   username: PropTypes.string,
   updateReaction: PropTypes.func,
}

export default MessageBox



// (messageData.reaction) ? <img src={`Assets/${getEmoticons(messageData.reaction)}.svg`} /> : <img src={`Assets/addReaction.svg`} />
