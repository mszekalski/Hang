import {
  RECEIVE_ALL_CHANNELS,
  RECEIVE_CHANNEL,
  REMOVE_CHANNEL
} from "../actions/channel_actions";
import merge from "lodash/merge";

const channelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, action.channels);
    case RECEIVE_CHANNEL:
      return merge({}, oldState, { [action.channel.id]: action.channel });
    case REMOVE_CHANNEL:
      let newState = merge({}, oldState);
      delete newState[action.channelId];
      return newState;
    default:
      return oldState;
  }
};

export default channelsReducer;
