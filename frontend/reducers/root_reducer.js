import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer.js";
import channelsReducer from "./channels_reducer.js";
import messagesReducer from "./chat_messages_reducer.js";
import uiReducer from "./ui_reducer.js";
import usersReducer from "./users_reducer.js";
import membershipsReducer from "./memberships_reducer.js";
import directThreadsReducer from "./direct_threads_reducer.js";

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  channels: channelsReducer,
  messages: messagesReducer,
  ui: uiReducer,
  users: usersReducer,
  directThreads: directThreadsReducer
});

export default rootReducer;
