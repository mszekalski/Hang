import React from "react";
import MembersIndex from "./members_index";
import ChannelDetails from "./channel_details";

class InfoSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  hide() {
    document
      .getElementById("info-sidebar-container")
      .classList.remove("display-info");
    document
      .getElementById("info-sidebar-container")
      .classList.add("info-hidden");
  }

  dropdown(e) {
    if (e.currentTarget.className === "channel-members-button") {
      document
        .getElementById("members-list-index")
        .classList.toggle("members-list-show");
    } else if (e.currentTarget.className === "channel-details-button") {
      document
        .getElementById("channel-details-dropdown-id")
        .classList.toggle("channel-detials-show");
    }
  }

  renderMembersIndexButton() {
    if (this.props.currentChannel.member_ids.length > 1) {
      return (
        <button onClick={this.dropdown} className="channel-members-button">
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
        <button onClick={this.dropdown} className="channel-members-button">
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

  render() {
    return (
      <div id="info-sidebar-container" className="info-hidden">
        <div className="info-header">
          <div className="info-header-title">
            About #{this.props.currentChannel.topic}
          </div>
          <button className="cancel-button-info" onClick={this.hide}>
            <div className="info-x">x</div>
          </button>
        </div>
        <div className="channel-details-dropdown">
          <button onClick={this.dropdown} className="channel-details-button">
            <i className="fas fa-info-circle" />Channel Details &#x25BE;
          </button>
          <div
            id="channel-details-dropdown-id"
            className="channel-details-dropdown-div"
          >
            <ChannelDetails currentChannel={this.props.currentChannel} />
          </div>
        </div>
        <div className="channel-members-dropdown">
          {this.renderMembersIndexButton()}
          <div id="members-list-index" className="members-index-list-div">
            <MembersIndex
              users={this.props.users}
              currentChannel={this.props.currentChannel}
              currentUser={this.props.currentUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InfoSidebar;
