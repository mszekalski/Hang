import { combineReducers } from 'redux';
import currentChannelReducer from './current_channel_reducer';
import modalReducer from './modal_reducer.js';

const uiReducer = combineReducers({
  modal: modalReducer,
  currentChannel: currentChannelReducer
});

export default uiReducer;
