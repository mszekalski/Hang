import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import merge from 'lodash/merge';

const currentChannelReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return action.channel.id;
    default:
      return oldState;
  }
};

export default currentChannelReducer;
