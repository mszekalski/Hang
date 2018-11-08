import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.renderInfoSidebar = this.renderInfoSidebar.bind(this);
    this.renderTopic = this.renderTopic.bind(this);
  }

  renderInfoSidebar() {
    this.props.onInfoClick();
  }

  renderTopic() {
    if (this.props.currentConversation.type === "Channel") {
      return `#${this.props.currentConversation.topic}`;
    } else {
      return "This is a DM Conversation";
    }
  }

  render() {
    return (
      <div className="channel-header-div">
        <h1 className="channel-topic-header">{this.renderTopic()}</h1>
        <div className="number-of-users-button">
          <i className="far fa-user user-logo-header" />
          {this.props.currentConversation.member_ids.length}
        </div>
        <div className="info-button" onClick={this.renderInfoSidebar}>
          <i className="fas fa-info-circle info-logo-header" />
        </div>
      </div>
    );
  }
}

export default withRouter(ChatHeader);
