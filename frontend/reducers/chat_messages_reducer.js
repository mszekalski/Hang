import { RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../actions/chat_message_actions';

import merge from 'lodash/merge';

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return merge({}, action.messages);
    case RECEIVE_MESSAGE:
      return merge({}, oldState, {[action.message.id]: action.message});
    default:
      return oldState;
  }
};

export default messagesReducer;
