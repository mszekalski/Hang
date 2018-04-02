import React from "react";
import ChannelIndexItem from "./channel_index_item";

function ChannelIndex({ channels }) {
  return (
    <ul>
      {channels.map(channel => (
        <ChannelIndexItem key={channel.id} channel={channel} />
      ))}
    </ul>
  );
}

export default ChannelIndex;
