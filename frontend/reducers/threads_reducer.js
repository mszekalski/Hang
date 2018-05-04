import {
  RECEIVE_ALL_THREADS,
  RECEIVE_THREAD,
  REMOVE_THREAD
} from "../actions/thread_actions";
import merge from "lodash/merge";

const threadsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_THREADS:
      return merge({}, action.threads);
    case RECEIVE_THREAD:
      return merge({}, oldState, { [action.thread.id]: action.thread });
    case REMOVE_THREAD:
      let newState = merge({}, oldState);
      delete newState[action.threadId];
      return newState;
    default:
      return oldState;
  }
};

export default threadsReducer;
