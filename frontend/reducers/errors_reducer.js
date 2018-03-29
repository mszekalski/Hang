import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import channelErrorsReducer from "./channel_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  channel: channelErrorsReducer
});
