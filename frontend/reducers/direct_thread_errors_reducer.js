import merge from "lodash/merge";

import {
  RECEIVE_DIRECT_THREAD_ERRORS,
  CLEAR_DIRECT_THREAD_ERRORS
} from "../actions/direct_thread_actions";

const directThreadErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DIRECT_THREAD_ERRORS:
      return action.errors;
    case CLEAR_DIRECT_THREAD_ERRORS:
      return [];
    default:
      return state;
  }
};

export default directThreadErrorsReducer;
