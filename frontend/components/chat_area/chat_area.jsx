import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import ChatFormContainer from "../chat_form/chat_form_container.js";
import ChatIndexContainer from "../chat_index/chat_index_container.js";
import ChatHeaderContainer from "../chat_header/chat_header_container.js";
import SidebarContainer from "../sidebar/sidebar_container";
import InfoSidebarContainer from "../info_sidebar/info_sidebar_container";

class ChatArea extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    if (Object.values(this.props.currentUser).length === 0) {
      return null;
    } else if (
      Object.values(this.props.currentChannel).length === 0 &&
      Object.values(this.props.match.params).length > 0
    ) {
      this.props.fetchAllUsers();
      this.props.fetchChannel(this.props.match.params.channelId);
      this.props.history.push(`/home/${this.props.match.params.channelId}`);
    } else {
      this.props.fetchAllUsers();
      this.props.fetchChannel(this.props.currentUser.channel_ids[0]);
      this.props.history.push(`/home/${this.props.currentUser.channel_ids[0]}`);
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.channelId !== newProps.match.params.channelId) {
      newProps.fetchChannel(newProps.match.params.channelId);
    }
  }
  render() {
    return (
      <div className="staging-area">
        <SidebarContainer />
        <div className="chat-area">
          <ChatHeaderContainer />
          <div className="chat-body">
            <div className="chat-container">
              <ChatIndexContainer />
              <ChatFormContainer />
            </div>
            <div className="channel-details">
              <InfoSidebarContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatArea);
