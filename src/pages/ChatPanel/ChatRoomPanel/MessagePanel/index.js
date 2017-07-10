import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import MessageBox from './MessageBox'
import styles from './styles'

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
   render() {
      const { messageDataList, username } = this.props
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
   username: state.loginData.user || ''
})

MessagePanel.propTypes = {
   messageDataList: PropTypes.array.isRequired,
   username: PropTypes.string.isRequired,
}
export default connect(mapStateToProps, () => ({}))(MessagePanel)
