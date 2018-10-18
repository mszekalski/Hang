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
    this.state = { InfoSidebar: false };
    this.handleSidebarChange = this.handleSidebarChange.bind(this);
  }

  componentDidMount() {
    if (Object.values(this.props.currentUser).length === 0) {
      return null;
    } else if (
      Object.values(this.props.currentConversation).length === 0 &&
      Object.values(this.props.match.params).length > 0 &&
      this.props.match.params.channelId !== undefined
    ) {
      this.props.fetchAllUsers();
      this.props.fetchChannel(this.props.match.params.channelId);
      this.props.history.push(
        `/home/channels/${this.props.match.params.channelId}`
      );
    } else if (
      Object.values(this.props.currentConversation).length === 0 &&
      Object.values(this.props.match.params).length > 0 &&
      this.props.match.params.directThreadId !== undefined
    ) {
      this.props.fetchAllUsers();
      this.props.fetchDirectThread(this.props.match.params.directThreadId);
      this.props.history.push(
        `/home/directThreads/${this.props.match.params.directThreadId}`
      );
    } else {
      this.props.fetchAllUsers();
      this.props.fetchChannel(
        this.props.currentUser.memberships[0].membershipable_id
      );
      this.props.history.push(
        `/home/channels/${
          this.props.currentUser.memberships[0].membershipable_id
        }`
      );
    }
  }

  componentWillReceiveProps(newProps) {
    if (
      this.props.match.params.channelId !== newProps.match.params.channelId &&
      newProps.match.params.channelId !== undefined
    ) {
      newProps.fetchChannel(newProps.match.params.channelId);
    } else if (
      this.props.match.params.directThreadId !==
        newProps.match.params.directThreadId &&
      newProps.match.params.directThreadId !== undefined
    ) {
      newProps.fetchDirectThread(newProps.match.params.directThreadId);
    }
  }

  handleSidebarChange() {
    if (this.state.InfoSidebar === false) {
      this.setState({ InfoSidebar: true });
    } else {
      this.setState({ InfoSidebar: false });
    }
  }

  renderInfoSidebar() {
    if (this.state.InfoSidebar === true) {
      return (
        <div className="info-sidebar">
          <InfoSidebarContainer onInfoClick={this.handleSidebarChange} />
        </div>
      );
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className="staging-area">
        <SidebarContainer />
        <div className="chat-area">
          <ChatHeaderContainer onInfoClick={this.handleSidebarChange} />
          <div className="chat-body">
            <div className="chat-container">
              <ChatIndexContainer />
              <ChatFormContainer />
            </div>
            {this.renderInfoSidebar()}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatArea);
