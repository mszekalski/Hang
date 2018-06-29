import { combineReducers } from "redux";
import currentChannelReducer from "./current_channel_reducer";
import modalReducer from "./modal_reducer";
const uiReducer = combineReducers({
  currentChannel: currentChannelReducer,
  modal: modalReducer
});

export default uiReducer;
