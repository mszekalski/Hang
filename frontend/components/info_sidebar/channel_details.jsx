import React from "react";

class ChannelDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="channel-detail-purpose">
        <div className="channel-detail-purpose-title">Purpose</div>
        <div className="channel-detail-purpose-text">
          {this.props.currentConversation.purpose}
        </div>
      </div>
    );
  }
}

export default ChannelDetails;
