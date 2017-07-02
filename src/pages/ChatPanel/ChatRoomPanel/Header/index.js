import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MemberList from './MemberList'
import styles from './styles'

class Header extends Component {
   render() {
      const { memberList, user, room } = this.props

      return (
         <div style={styles.header}>
            <span style={styles.channelName}>
               {room}
            </span>
            <MemberList memberList={memberList} user={user} />
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   memberList: state.roomDetails.members || [],
   user: state.loginData.user,
   room: state.roomDetails.roomName,
})

Header.propTypes = {
   memberList: PropTypes.array.isRequired,
   user: PropTypes.string,
   room: PropTypes.string
}


export default connect(mapStateToProps, () => ({}))(Header)
