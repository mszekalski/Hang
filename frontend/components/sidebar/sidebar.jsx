import React from "react";
import { withRouter } from "react-router";
import { Route, Link, NavLink } from "react-router-dom";
import WelcomeContainer from "../dropdown/welcome_container";
import ChannelFormContainer from "../channel/channel_form_container";
import MembershipFormContainer from "../membership/membership_form_container";
import ThreadFormContainer from "../thread/thread_form_container";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.showChannelForm = this.showChannelForm.bind(this);
    this.showMembershipForm = this.showMembershipForm.bind(this);
    this.showThreadForm = this.showThreadForm.bind(this);
    this.renderDirectThreads = this.renderDirectThreads.bind(this);
    this.renderChannels = this.renderChannels.bind(this);
  }

  componentDidMount() {
    this.props.fetchChannels();
    this.props.fetchDirectThreads();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      channels: newProps.channels,
      directThreads: newProps.directThreads
    });
  }

  renderChannels() {
    return this.props.channels.map(channel => {
      if (channel.member_ids.includes(this.props.user.id)) {
        return (
          <li key={`${channel.id}`} className="channel-item">
            <NavLink
              to={`/home/channels/${channel.id}`}
              className="channel-topic"
              onClick={() =>
                this.props.history.push(`/home/channels/${channel.id}`)
              }
              activeClassName="active"
            >
              # {channel.topic}
            </NavLink>
          </li>
        );
      }
    });
  }

  renderDirectThreadNames(members) {
    if (Object.values(this.props.users).length === 0) return null;
    let names = [];

    if (members.length === 1 && members[0] === this.props.user.id) {
      return this.props.user.username;
    }

    for (let i = 0; i < members.length; i++) {
      let id = members[i];
      if (id !== this.props.user.id) {
        names.push(this.props.users[id].username);
      }
    }
    if (names.length > 1) {
      return names.join(",");
    } else {
      return names.join("");
    }
  }

  renderDirectThreads() {
    return this.props.directThreads.map(directThread => {
      if (directThread.member_ids.includes(this.props.user.id)) {
        return (
          <li key={`${directThread.id}`} className="direct-thread-item">
            <NavLink
              to={`/home/directThreads/${directThread.id}`}
              className="direct-thread-users-list"
              onClick={() =>
                this.props.history.push(
                  `/home/directThreads/${directThread.id}`
                )
              }
              activeClassName="active"
            >
              {this.renderDirectThreadNames(directThread.member_ids)}
            </NavLink>
          </li>
        );
      }
    });
  }

  showChannelForm() {
    this.props.openModal(<ChannelFormContainer />);
  }

  showMembershipForm() {
    this.props.openModal(<MembershipFormContainer />);
  }

  showThreadForm() {
    this.props.openModal(<ThreadFormContainer />);
  }

  render() {
    return (
      <div className="sidebar">
        <WelcomeContainer />
        <div className="channels-header">
          <div className="membership-button" onClick={this.showMembershipForm}>
            Channels
          </div>
          <div className="plus-button" onClick={this.showChannelForm}>
            +
          </div>
        </div>
        <ul>{this.renderChannels()}</ul>
        <div className="thread-header">
          <div className="thread-button" onClick={this.showThreadForm}>
            Direct Messages
          </div>
          <div className="plus-button" onClick={this.showThreadForm}>
            +
          </div>
        </div>
        <ul>{this.renderDirectThreads()}</ul>
      </div>
    );
  }
}

export default withRouter(Sidebar);
