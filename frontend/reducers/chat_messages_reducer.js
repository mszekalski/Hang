import { RECEIVE_ALL_MESSAGES } from '../actions/chat_message_actions';

import merge from 'lodash/merge';

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return merge({}, action.messages);
    default:
      return oldState;
  }
};

export default messagesReducer;
