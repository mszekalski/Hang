import * as channelApiUtil from "../util/channel_api_util";

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const CLEAR_CHANNEL_ERRORS = "CLEAR_CHANNEL_ERRORS";

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

export const receiveErrors = errors => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_CHANNEL_ERRORS
  };
};

export const fetchChannels = () => dispatch =>
  channelApiUtil
    .fetchChannels()
    .then(channels => dispatch(receiveAllChannels(channels)));

export const fetchChannel = id => dispatch => {
  return channelApiUtil.fetchChannel(id).then(channel => {
    return dispatch(receiveChannel(channel));
  });
};

export const createChannel = channel => dispatch =>
  channelApiUtil.createChannel(channel).then(
    channel => dispatch(receiveChannel(channel)),
    err => {
      return dispatch(receiveErrors(err.responseJSON));
    }
  );

export const updateChannel = channel => dispatch =>
  channelApiUtil
    .updateChannel(channel)
    .then(channel => dispatch(receiveChannel(channel)));

export const deleteChannel = channelId => dispatch =>
  channelApiUtil
    .deleteChannel(channelId)
    .then(channel => dispatch(removeChannel(channelId)));
