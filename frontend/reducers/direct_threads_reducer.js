import {
  RECEIVE_ALL_DIRECT_THREADS,
  RECEIVE_DIRECT_THREAD,
  REMOVE_DIRECT_THREAD
} from "../actions/direct_thread_actions";
import merge from "lodash/merge";

const directThreadsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_DIRECT_THREADS:
      return merge({}, action.directThreads);
    case RECEIVE_DIRECT_THREAD:
      return merge({}, oldState, {
        [action.directThread.id]: action.directThread
      });
    case REMOVE_DIRECT_THREAD:
      let newState = merge({}, oldState);
      delete newState[action.directThreadId];
      return newState;
    default:
      return oldState;
  }
};

export default directThreadsReducer;
