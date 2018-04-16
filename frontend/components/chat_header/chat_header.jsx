import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class ChatHeader extends React.Component {
  renderInfoSidebar() {
    document
      .getElementById("info-sidebar-container")
      .classList.remove("info-hidden");
    document
      .getElementById("info-sidebar-container")
      .classList.add("display-info");
  }

  render() {
    return (
      <div className="channel-header-div">
        <h1 className="channel-topic-header">
          #
          {this.props.currentChannel.topic}
        </h1>

        <div className="info-button" onClick={this.renderInfoSidebar}>
          <i class="fas fa-info-circle" />
        </div>
      </div>
    );
  }
}

export default withRouter(ChatHeader);
