import React from "react";
import ChannelIndexItem from "./channel_index_item";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  joinedChannels() {
    for (let i = 0; i < this.props.channels.length; i++) {
      if (
        this.props.channels[i].member_ids.includes(this.props.user.id) &&
        this.props.channels[i].topic
          .toLowerCase()
          .includes(this.props.search.toLowerCase())
      ) {
        return (
          <div className="bottom-membership-search-div">
            <div className="channel-index-list-header">
              Channels you belong to
            </div>
            {this.props.channels.map(channel => {
              if (
                channel.member_ids.includes(this.props.user.id) &&
                channel.topic
                  .toLowerCase()
                  .includes(this.props.search.toLowerCase())
              ) {
                return (
                  <ChannelIndexItem
                    channel={channel}
                    key={channel.id}
                    user={this.props.user}
                    receiveChannel={this.props.receiveChannel}
                    hide={this.props.hide}
                    history={this.props.history}
                  />
                );
              }
            })}
          </div>
        );
      }
    }
  }

  notJoinedChannels() {
    for (let i = 0; i < this.props.channels.length; i++) {
      if (
        !this.props.channels[i].member_ids.includes(this.props.user.id) &&
        this.props.channels[i].topic
          .toLowerCase()
          .includes(this.props.search.toLowerCase()) &&
        this.props.channels[i].private === false
      ) {
        return (
          <div className="top-membership-search-div">
            <div className="channel-index-list-header">
              Channels you can join
            </div>
            {this.props.channels.map(channel => {
              if (
                !channel.member_ids.includes(this.props.user.id) &&
                channel.topic
                  .toLowerCase()
                  .includes(this.props.search.toLowerCase()) &&
                channel.private === false
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
        );
      }
    }
  }

  render() {
    return (
      <div className="channel-index-list-div">
        <div className="channel-index-list">
          {this.notJoinedChannels()}
          {this.joinedChannels()}
        </div>
      </div>
    );
  }
}

export default ChannelIndex;
