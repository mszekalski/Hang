import { RECEIVE_CHANNEL } from "../actions/channel_actions";
import { RECEIVE_DIRECT_THREAD } from "../actions/direct_thread_actions";
import merge from "lodash/merge";

const preloadedState = {
  member_ids: []
};

const currentConversationReducer = (oldState = preloadedState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return merge({}, oldState, {
        id: action.channel.id,
        type: "Channel",
        topic: action.channel.topic,
        member_ids: action.channel.member_ids,
        purpose: action.channel.purpose
      });
    case RECEIVE_DIRECT_THREAD:
      return merge({}, oldState, {
        id: action.directThread.id,
        type: "DirectThread",
        member_ids: action.directThread.member_ids
      });
    default:
      return oldState;
  }
};

export default currentConversationReducer;
