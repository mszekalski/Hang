import React from "react";

class InfoSidebar extends React.Component {
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
            <i className="fas fa-info-circle" />Channel Detials
          </button>
        </div>
      </div>
    );
  }
}

export default InfoSidebar;
