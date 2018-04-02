import React from "react";
import ChannelIndexItem from "./channel_index_item";

function ChannelIndex({ channels, user }) {
  return (
    <ul>
      {channels.map(channel => {
        if (!channel.member_ids.includes(user.id)) {
          return <ChannelIndexItem key={channel.id} channel={channel} />;
        }
      })}
    </ul>
  );
}

export default ChannelIndex;
