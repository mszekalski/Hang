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
    this.renderChannelInfo = this.renderChannelInfo.bind(this);
    this.renderInfoSidebar = this.renderInfoSidebar.bind(this);
  }

  dropdown(e) {
    let currentTarget = e.target.value;
    if (currentTarget === "membersDropdown") {
      this.setState({ membersDropdown: !this.state.membersDropdown });
    } else if (currentTarget === "infoDropdown") {
      this.setState({ infoDropdown: !this.state.infoDropdown });
    }
  }

  renderInfoSidebar() {
    this.props.onInfoClick();
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
    if (this.state.membersDropdown === true) {
      return (
        <div className="members-index-list-div">
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

  renderChannelInfo() {
    if (this.state.infoDropdown === true) {
      return (
        <div className="channel-details-dropdown-div">
          <ChannelDetails
            currentChannel={this.props.currentChannel}
            users={this.props.users}
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
            <div className="info-x" onClick={this.renderInfoSidebar}>
              x
            </div>
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
          {this.renderChannelInfo()}
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
