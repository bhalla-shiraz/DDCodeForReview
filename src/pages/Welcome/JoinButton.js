import React from 'react'
import styles from './styles'

const JoinButton = ({label, onClick}) => (
   <button
      style={styles.joinButton}
      onClick={onClick}
      >
      {label}
   </button>
)

export default JoinButton
