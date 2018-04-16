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

  render() {
    return (
      <div id="info-sidebar-container" className="info-hidden">
        <div className="info-header">
          <div className="info-header-title">
            About #{this.props.currentChannel.topic}
          </div>
          <button className="cancel-button-info" onClick={this.hide}>
            <span className="membership-x">X</span>
          </button>
        </div>
      </div>
    );
  }
}

export default InfoSidebar;
