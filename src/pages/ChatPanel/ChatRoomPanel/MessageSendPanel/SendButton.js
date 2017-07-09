import React, { PropTypes } from 'react'
import styles from './styles'

const SendButton = ({label, sendMessage}) => (
   <button
      style={styles.sendButton}
      onClick={sendMessage}
      >
      {label}
   </button>)

SendButton.propTypes = {
   label: PropTypes.string,
   sendMessage: PropTypes.func,
}
export default SendButton
