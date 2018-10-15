import { combineReducers } from "redux";
import currentConversationReducer from "./current_conversation_reducer";
import modalReducer from "./modal_reducer";
const uiReducer = combineReducers({
  currentConversation: currentConversationReducer,
  modal: modalReducer
});

export default uiReducer;
