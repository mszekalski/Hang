import React from "react";
import MembersIndex from "./members_index";
import ChannelDetails from "./channel_details";

class infoSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.renderMembersIndex = this.renderMembersIndex.bind(this);
    this.renderMembersIndexButton = this.renderMembersIndexButton.bind(this);
    this.renderChannelInfo = this.renderChannelInfo.bind(this);
    this.renderinfoSidebar = this.renderinfoSidebar.bind(this);
    this.renderMembersDropdown = this.renderMembersDropdown.bind(this);
    this.renderInfoDropdown = this.renderInfoDropdown.bind(this);
  }

  renderinfoSidebar() {
    this.props.onInfoClick();
  }

  renderMembersDropdown() {
    this.props.onMembersChange();
  }

  renderInfoDropdown() {
    this.props.onInfoDropdownChange();
  }

  renderMembersIndexButton() {
    if (this.props.currentConversation.member_ids.length > 1) {
      return (
        <div
          onClick={this.renderMembersDropdown}
          className="channel-members-button"
        >
          <div className="channel-members-button-content">
            <i className="fas fa-user" />
            <div className="channel-members-button-text">
              {this.props.currentConversation.member_ids.length} Members
            </div>
            <div className="members-arrow">&#x25BE;</div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          onClick={this.renderMembersDropdown}
          className="channel-members-button"
        >
          <div className="channel-members-button-content">
            <i className="fas fa-user" />
            <div className="channel-members-button-text">
              {this.props.currentConversation.member_ids.length} Member
            </div>
            <div className="members-arrow">&#x25BE;</div>
          </div>
        </div>
      );
    }
  }

  renderMembersIndex() {
    if (this.props.membersDropdown === true) {
      return (
        <div className="members-index-list-div">
          <MembersIndex
            users={this.props.users}
            currentConversation={this.props.currentConversation}
            currentUser={this.props.currentUser}
          />
        </div>
      );
    } else {
      return null;
    }
  }

  renderChannelInfo() {
    if (this.props.infoDropdown === true) {
      return (
        <div className="channel-details-dropdown-div">
          <ChannelDetails
            currentConversation={this.props.currentConversation}
            users={this.props.users}
          />
        </div>
      );
    } else {
      return null;
    }
  }

  renderHeader() {
    if (this.props.currentConversation.type === "Channel") {
      return `About #${this.props.currentConversation.topic}`;
    } else {
      return "About this conversation";
    }
  }

  renderChannelInfoButton() {
    if (this.props.currentConversation.type === "Channel") {
      return (
        <div className="channel-details-dropdown">
          <div
            onClick={this.renderInfoDropdown}
            className="channel-details-button"
          >
            <div className="channel-details-button-content">
              <i className="fas fa-info-circle details-info-circle" />
              <div className="channel-details-button-text">Channel Details</div>
              <div className="members-arrow">&#x25BE;</div>
            </div>
          </div>
          {this.renderChannelInfo()}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="info-sidebar-container">
        <div className="info-header">
          <div className="info-header-title">{this.renderHeader()}</div>
          <div className="cancel-button-info">
            <div className="info-x" onClick={this.renderinfoSidebar}>
              x
            </div>
          </div>
        </div>
        {this.renderChannelInfoButton()}
        <div className="channel-members-dropdown">
          {this.renderMembersIndexButton()}
          {this.renderMembersIndex()}
        </div>
      </div>
    );
  }
}

export default infoSidebar;
