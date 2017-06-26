import React, { Component } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import styles from './styles.js'
import JoinButton from './joinButton'
import {
   joinButtonLabel,
   hintText
} from '../../constants/Welcome'
import { login } from '../../redux/actions/loginData'

class Welcome extends Component {
   constructor(props) {
      super(props)
      this.state = {
         errorText: ""
      }
   }

   login() {
      const { login } = this.props
      const username = this.username.value
      {(username !== '') ? login(username) : this.setState({errorText: 'Please Enter a Valid User Name'})}
   }
   render() {
      const { errorText } = this.state
      return (
         <div style={styles.joinContainer}>
            <input
               style={styles.usernameField}
               placeholder={hintText}
               ref={(elem) => this.username = elem}
            />
         <JoinButton label={joinButtonLabel} onClick={() => this.login()}/>
         <div style={styles.errorText}>{errorText}</div>
         </div>
      )
   }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {
   login
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
