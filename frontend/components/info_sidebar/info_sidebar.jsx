import React from "react";

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

  dropdown() {
    document
      .getElementById("channel-details-dropdown")
      .classList.toggle("channel-detials-show");
  }

  renderMembersIndexButton() {
    if (this.props.currentChannel.member_ids.length > 1) {
      return (
        <button onClick={this.dropdown} className="channel-members-button">
          <i className="fas fa-user" />
          {this.props.currentChannel.member_ids.length} Members &#x25BE;
        </button>
      );
    } else {
      return (
        <button onClick={this.dropdown} className="channel-members-button">
          <i className="fas fa-user" />
          {this.props.currentChannel.member_ids.length} Member &#x25BE;
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
        </div>
        <div className="channel-members-dropdown">
          {this.renderMembersIndexButton()}
        </div>
      </div>
    );
  }
}

export default InfoSidebar;
