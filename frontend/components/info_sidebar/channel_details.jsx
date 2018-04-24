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
          {this.props.currentChannel.purpose}
        </div>
      </div>
    );
  }
}

export default ChannelDetails;

// <div className="channel-created-purpose-title">Created</div>
// <div className="channel-created-purpose-text">
//   Created by
//   {this.props.users[this.props.currentChannel.creator_id].username} on
//   {this.props.currentChannel.created_at}
// </div>
