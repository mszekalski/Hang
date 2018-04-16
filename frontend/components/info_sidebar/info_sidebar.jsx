import React from "react";

class InfoSidebar extends React.Component {
  render() {
    return (
      <div id="info-sidebar-container" className="info-hidden">
        <div className="info-header">
          <div className="info-header-title">
            About #{this.props.currentChannel.topic}
          </div>
        </div>
      </div>
    );
  }
}

export default InfoSidebar;
