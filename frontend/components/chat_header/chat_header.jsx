import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.renderInfoSidebar = this.renderInfoSidebar.bind(this);
  }
  renderInfoSidebar() {
    this.props.onInfoClick();
  }

  render() {
    return (
      <div className="channel-header-div">
        <h1 className="channel-topic-header">
          #
          {this.props.currentChannel.topic}
        </h1>

        <div className="info-button" onClick={this.renderInfoSidebar}>
          <i className="fas fa-info-circle info-logo-header" />
        </div>
      </div>
    );
  }
}

export default withRouter(ChatHeader);
