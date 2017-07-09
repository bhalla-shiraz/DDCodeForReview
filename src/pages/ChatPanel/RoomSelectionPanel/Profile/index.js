import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { updateProfileInformation } from 'actions/profile'
import FlatButton from 'material-ui/FlatButton'

class Profile extends Component {
   update() {
      const { updateProfileInformation, username } = this.props
      updateProfileInformation(username, {
         age: 20,
         name: 'Shiraz',
      })
   }
   render() {
      const actions = [
         <FlatButton
           label="Ok"
           primary={true}
           keyboardFocused={true}
           onClick={() => this.update()}
         />,
       ];
       const { profile } = this.props

      return(
         <MuiThemeProvider>
            <Dialog
             title="Profile"
             actions={actions}
             modal={false}
             open
            >
            <div>{JSON.stringify(profile)}</div>
            {'Want To save?'}
           </ Dialog>
          </ MuiThemeProvider>
      )
   }
}

const mapStateToProps = (state) => ({
   profile: state.profile,
   username: state.loginData.user,
})

const mapDispatchToProps = {
   updateProfileInformation,
}

Profile.propTypes = {
   profile: PropTypes.object,
   updateProfileInformation: PropTypes.func,
   username: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
