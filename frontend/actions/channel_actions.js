import * as channelApiUtil from '../util/channel_api_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

export const receiveAllChannels = channels => ({
  type: RECEIVE_ALL_CHANNELS,
  channels
});

export const receiveChannel = channel => {
  return {
    type: RECEIVE_CHANNEL,
    channel
  };
};

export const removeChannel = channelId => {
  return {
    type: REMOVE_CHANNEL,
    channelId
  };
};

export const fetchChannels = () => dispatch => (
  channelApiUtil.fetchChannels().then(channels => dispatch(receiveAllChannels(channels)))
);

export const fetchChannel = (id) => dispatch => (
  channelApiUtil.fetchChannel(id).then(channel => dispatch(receiveChannel(channel)))
);

export const createChannel = (channel) => dispatch => (
  channelApiUtil.createChannel(channel).then(channel => dispatch(receiveChannel(channel)))
);

export const updateChannel = (channel) => dispatch => (
  channelApiUtil.updateChannel(channel).then(channel => dispatch(receiveChannel(channel)))
);

export const deleteChannel = (channelId) => dispatch => (
  channelApiUtil.deleteChannel(channelId).then(channel => dispatch(removeChannel(channelId)))
);
