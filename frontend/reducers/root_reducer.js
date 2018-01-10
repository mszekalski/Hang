import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer.js';
import channelsReducer from './channels_reducer.js';
import messagesReducer from './chat_messages_reducer.js';
import uiReducer from './ui_reducer.js';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  ui: uiReducer
});

export default rootReducer;
