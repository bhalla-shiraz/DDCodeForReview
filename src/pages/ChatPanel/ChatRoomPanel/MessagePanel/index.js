import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import MessageBox from './MessageBox'
import styles from './styles'

class MessagePanel extends Component {
   constructor(props) {
      super(props)
   }
   scrollToBottom() {
     const node = ReactDOM.findDOMNode(this.panel);
     node.scrollTop = node.scrollHeight
     node.scrollIntoView({ behavior: "smooth" });
   }

   componentDidMount() {
     this.scrollToBottom();
   }

   componentDidUpdate() {
     this.scrollToBottom();
   }
   render() {
      const { messageDataList, channel, username } = this.props
      return (
         <div
            style={styles.messagePanel}
            ref={(elem) => this.panel = elem}
            >
            {messageDataList.map((messageData, index) =>
               <MessageBox key={index} messageData={messageData} username={username} />)}
         </div>
      )
   }
}

const mapStateToProps = (state) => ({
   messageDataList: state.roomDetails.messages || [],
   username: state.loginData.user
})

export default connect(mapStateToProps, () => ({}))(MessagePanel)
