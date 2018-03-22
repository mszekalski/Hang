import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';



class ChatHeader extends React.Component {

render() {
  return (
    <div className="channel-header-div">
      <h1 className="channel-topic-header">#
        {this.props.currentChannel.topic}</h1>
    </div>
  );
}

}

export default withRouter(ChatHeader);