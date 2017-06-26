import React from 'react'
import styles from './styles'

const SendButton = ({label, sendMessage}) => (
   <button
      style={styles.sendButton}
      onClick={sendMessage}
      >
      {label}
   </button>)

export default SendButton
