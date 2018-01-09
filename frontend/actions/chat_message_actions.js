import * as chatMessageApiUtil from '../util/chat_message_api_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";

export const receiveAllMessages = messages => ({
  type: RECEIVE_ALL_MESSAGES,
  messages
});

export const fetchAllMessages = () => dispatch => (
  chatMessageApiUtil.fetchAllMessages().then(messages => dispatch(receiveAllMessages(messages)))
);
