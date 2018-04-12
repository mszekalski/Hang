import React from "react";
import ChannelIndexItem from "./channel_index_item";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="channel-index-list-div">
        <div className="channel-index-list">
          <div className="channel-index-list-header">Channels you can join</div>
          {this.props.channels.map(channel => {
            if (
              !channel.member_ids.includes(this.props.user.id) &&
              channel.topic
                .toLowerCase()
                .includes(this.props.search.toLowerCase())
            ) {
              return (
                <ChannelIndexItem
                  channel={channel}
                  key={channel.id}
                  user={this.props.user}
                  createMembership={this.props.createMembership}
                  hide={this.props.hide}
                  history={this.props.history}
                />
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default ChannelIndex;
