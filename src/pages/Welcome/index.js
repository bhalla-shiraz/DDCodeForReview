import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import JoinButton from './joinButton'
import * as styles from './styles.css'
import {
   joinButtonLabel,
   hintText
} from '../../constants/Welcome'
import {
   ENTER
} from '../../constants/events'
import { login } from '../../redux/actions/loginData'

class Welcome extends Component {
   constructor(props) {
      super(props)
      this.state = {
         errorText: ""
      }
   }

   onKeyPress({key}) {
      if(key === ENTER) {
         this.login()
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
         <div
            className={cn(styles.joinContainer)}
            >
            <input
               className={cn(styles.usernameField)}
               placeholder={hintText}
               onKeyPress={(event) => this.onKeyPress(event)}
               ref={(elem) => this.username = elem}
            />
         <JoinButton
            label={joinButtonLabel}
            onClick={() => this.login()}
            />
         <div className={cn(styles.errorText)}>{errorText}</div>
         </div>
      )
   }
}

const mapStateToProps = () => ({})
const mapDispatchToProps = {
   login
}

Welcome.propTypes = {
   login: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
