import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
         {this.props.children}
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps)(App);
