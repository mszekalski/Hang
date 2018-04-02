import React from "react";

function ChannelIndexItem({ channel, user }) {
  return <li className="channel-search-li">{channel.topic}</li>;
}

export default ChannelIndexItem;
