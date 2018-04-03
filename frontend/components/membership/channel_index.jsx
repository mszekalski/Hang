import React from "react";
import ChannelIndexItem from "./channel_index_item";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="channel-index-list">
        {this.props.channels.map(channel => {
          if (!channel.member_ids.includes(this.props.user.id)) {
            return (
              <ChannelIndexItem
                channel={channel}
                key={channel.id}
                user={this.props.user}
                createMembership={this.props.createMembership}
                hide={this.props.hide}
              />
            );
          }
        })}
      </ul>
    );
  }
}

export default ChannelIndex;
