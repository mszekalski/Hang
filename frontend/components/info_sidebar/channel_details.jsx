import React from "react";

class ChannelDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="channel-detail-purpose">
        {this.props.currentChannel.topic}
      </div>
    );
  }
}

export default ChannelDetails;
