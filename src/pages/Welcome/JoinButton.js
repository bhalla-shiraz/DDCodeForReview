import React, { PropTypes } from 'react'
import styles from './styles'

const JoinButton = ({label, onClick}) => (
   <button
      style={styles.joinButton}
      onClick={onClick}
      >
      {label}
   </button>
)

JoinButton.propTypes = {
   label: PropTypes.string,
   onClick: PropTypes.func,
}
export default JoinButton
