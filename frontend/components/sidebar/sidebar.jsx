import React from "react";
import { withRouter } from "react-router";
import { Route, Link, NavLink } from "react-router-dom";
import WelcomeContainer from "../dropdown/welcome_container";
import ChannelFormContainer from "../channel/channel_form_container";
import MembershipFormContainer from "../membership/membership_form_container";

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchChannels();
  }

  componentWillReceiveProps(newProps) {
    // this.scrollToBottom(document.getElementById("chat-logs"));
    this.setState({ channels: newProps.channels });
  }

  renderChannels() {
    return this.props.channels.map(channel => {
      if (channel.member_ids.includes(this.props.user.id)) {
        return (
          <li key={`${channel.id}`} className="channel-item">
            <NavLink
              to={`/home/${channel.id}`}
              className="channel-topic"
              onClick={() => this.props.history.push(`/home/${channel.id}`)}
              activeClassName="active"
            >
              # {channel.topic}
            </NavLink>
          </li>
        );
      }
    });
  }

  renderChannelForm() {
    document
      .getElementById("channel-form-container")
      .classList.remove("hidden");
    document
      .getElementById("channel-form-container")
      .classList.add("display-form");
  }

  renderMembershipForm() {
    document
      .getElementById("membership-form-container")
      .classList.remove("hidden");
    document
      .getElementById("membership-form-container")
      .classList.add("display-form");
  }

  render() {
    return (
      <div className="sidebar">
        <WelcomeContainer />
        <ChannelFormContainer />
        <MembershipFormContainer />
        <div className="channels-header">
          <div
            className="membership-button"
            onClick={this.renderMembershipForm}
          >
            Channels
          </div>
          <div className="plus-button" onClick={this.renderChannelForm}>
            +
          </div>
        </div>
        <ul>{this.renderChannels()}</ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
