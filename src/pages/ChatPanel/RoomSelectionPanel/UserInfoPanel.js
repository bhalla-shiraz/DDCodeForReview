import React from 'react'
import styles from './styles'

const UserInfoPanel = ({ user, timeOnline }) => (
   <div style={styles.userInfoPanel}>
      <div style={styles.userName}>{ user }</div>
      <div style={styles.timeOnline}>{ (timeOnline === 0) ? `Just came online` : `Online for ${timeOnline} minutes` }</div>
   </div>
)

export default UserInfoPanel
