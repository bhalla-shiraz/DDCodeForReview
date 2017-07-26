import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import MessageBox from './MessageBox'
import styles from './styles'
import { updateReaction } from 'actions/roomDetails'
import { SMILEY } from 'constants/emoticons'

class MessagePanel extends Component {
   constructor(props) {
      super(props)
   }
   scrollToBottom() {
     const node = ReactDOM.findDOMNode(this.panel)
     node.scrollTop = node.scrollHeight
     node.scrollIntoView({ behavior: "smooth" })
   }

   componentDidMount() {
     this.scrollToBottom()
   }
   shouldComponentUpdate(prevProps) {
      return !(JSON.stringify(prevProps.messageDataList) === JSON.stringify(this.props.messageDataList))
   }
   componentDidUpdate() {
     this.scrollToBottom()
   }

   updateReactionOnClick(id, emoticon) {
      const { updateReaction, roomId, roomName } = this.props
      let newEmoticon = (emoticon) ? null : SMILEY
      updateReaction(roomId, id, newEmoticon, roomName)
   }

   render() {
      const { messageDataList, username } = this.props
      return (
         <div
            style={styles.messagePanel}
            ref={(elem) => this.panel = elem}
            >
            {messageDataList.map((messageData, index) =>
               <MessageBox
                  key={index}
                  messageData={messageData}
                  username={username}
                  updateReaction={(id, emoticon) => this.updateReactionOnClick(id, emoticon)}
               />)}
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   messageDataList: state.roomDetails.messages || [],
   username: state.loginData.user || '',
   roomId: state.roomDetails.room,
   roomName: state.roomDetails.roomName,
})

const mapDispatchToProps = {
   updateReaction,
}

MessagePanel.propTypes = {
   messageDataList: PropTypes.array.isRequired,
   username: PropTypes.string.isRequired,
   updateReaction: PropTypes.func.isRequired,
   roomId: PropTypes.number,
   roomName: PropTypes.string,
}
export default connect(mapStateToProps, mapDispatchToProps)(MessagePanel)
