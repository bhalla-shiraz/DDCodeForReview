import React, { PropTypes } from 'react'
import styles from './styles'

const UserInfoPanel = ({ user, timeOnline, viewProfile }) => (
   <div style={styles.userInfoPanel}>
      <div style={styles.userName} onClick={() => viewProfile()}>{ user }</div>
      <div style={styles.timeOnline}>{ (timeOnline === 0) ? `Just came online` : `Online for ${timeOnline} minutes` }</div>
   </div>
)

UserInfoPanel.propTypes = {
   user: PropTypes.string,
   timeOnline: PropTypes.number,
   viewProfile: PropTypes.func,

}
export default UserInfoPanel
