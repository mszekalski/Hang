import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_DIRECT_THREAD } from "../actions/direct_thread_actions";
import merge from "lodash/merge";

const currentConversationReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return action.channel.id;
    case RECEIVE_DIRECT_THREAD:
      return action.directThread.id;
    default:
      return oldState;
  }
};

export default currentConversationReducer;
