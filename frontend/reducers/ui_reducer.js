import { combineReducers } from "redux";
import currentChannelReducer from "./current_channel_reducer";

const uiReducer = combineReducers({
  currentChannel: currentChannelReducer
});

export default uiReducer;
