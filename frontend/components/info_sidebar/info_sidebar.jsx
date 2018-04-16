import React from "react";

class InfoSidebar extends React.Component {
  render() {
    return (
      <div id="info-sidebar-container" className="info-hidden">
        <div>About {this.props.currentChannel.topic}</div>
      </div>
    );
  }
}

export default InfoSidebar;
