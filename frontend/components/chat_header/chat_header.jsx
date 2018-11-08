import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.renderinfoSidebar = this.renderinfoSidebar.bind(this);
    this.renderTopic = this.renderTopic.bind(this);
    this.renderMembersDropdown = this.renderMembersDropdown.bind(this);
  }

  renderinfoSidebar() {
    this.props.onInfoClick();
  }

  renderMembersDropdown() {
    this.props.onInfoClick();
    this.props.onMembersChange();
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
        <div className="channel-info-content">
          <h1 className="channel-topic-header">{this.renderTopic()}</h1>
          <div
            className="number-of-users-button"
            onClick={this.renderMembersDropdown}
          >
            <i className="far fa-user user-logo-header" />
            {this.props.currentConversation.member_ids.length}
          </div>
        </div>
        <div className="info-button" onClick={this.renderinfoSidebar}>
          <i className="fas fa-info-circle info-logo-header" />
        </div>
      </div>
    );
  }
}

export default withRouter(ChatHeader);
