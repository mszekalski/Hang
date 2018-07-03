import React from "react";
import MembersIndex from "./members_index";
import ChannelDetails from "./channel_details";

class InfoSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { infoDropdown: false, membersDropdown: false };
    this.dropdown = this.dropdown.bind(this);
    this.renderMembersIndex = this.renderMembersIndex.bind(this);
    this.renderMembersIndexButton = this.renderMembersIndexButton.bind(this);
  }

  dropdown(e) {
    let currentTarget = e.target.value;

    this.setState({ currentTarget: !this.state.currentTarget });
  }

  renderMembersIndexButton() {
    if (this.props.currentChannel.member_ids.length > 1) {
      return (
        <button
          onClick={this.dropdown}
          className="channel-members-button"
          value="membersDropdown"
        >
          <div className="channel-members-button-content">
            <i className="fas fa-user" />
            <div className="channel-members-button-text">
              {this.props.currentChannel.member_ids.length} Members
            </div>
            <div className="members-arrow">&#x25BE;</div>
          </div>
        </button>
      );
    } else {
      return (
        <button
          onClick={this.dropdown}
          className="channel-members-button"
          value="membersDropdown"
        >
          <div className="channel-members-button-content">
            <i className="fas fa-user" />
            <div className="channel-members-button-text">
              {this.props.currentChannel.member_ids.length} Member
            </div>
            <div className="members-arrow">&#x25BE;</div>
          </div>
        </button>
      );
    }
  }

  renderMembersIndex() {
    debugger;
    if (this.state.membersDropdown === true) {
      return (
        <div id="members-list-index" className="members-index-list-div">
          <MembersIndex
            users={this.props.users}
            currentChannel={this.props.currentChannel}
            currentUser={this.props.currentUser}
          />
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div id="info-sidebar-container">
        <div className="info-header">
          <div className="info-header-title">
            About #{this.props.currentChannel.topic}
          </div>
          <button className="cancel-button-info" onClick={this.hide}>
            <div className="info-x">x</div>
          </button>
        </div>
        <div className="channel-details-dropdown">
          <button
            onClick={this.dropdown}
            className="channel-details-button"
            value="infoDropdown"
          >
            <div className="channel-details-button-content">
              <i className="fas fa-info-circle details-info-circle" />
              <div className="channel-details-button-text">Channel Details</div>
              <div className="members-arrow">&#x25BE;</div>
            </div>
          </button>
          <div
            id="channel-details-dropdown-id"
            className="channel-details-dropdown-div"
          >
            <ChannelDetails
              currentChannel={this.props.currentChannel}
              users={this.props.users}
            />
          </div>
        </div>
        <div className="channel-members-dropdown">
          {this.renderMembersIndexButton()}
          {this.renderMembersIndex()}
        </div>
      </div>
    );
  }
}

export default InfoSidebar;
