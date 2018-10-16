import { connect } from "react-redux";

import {
  fetchAllMessages,
  receiveMessage
} from "../../actions/chat_message_actions";
import { fetchChannel } from "../../actions/channel_actions";
import ChatIndex from "./chat_index";
import { values } from "lodash";

const mapStateToProps = state => {
  return {
    messages: values(state.messages),
    currentConversation: state.ui.currentConversation || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllMessages: () => dispatch(fetchAllMessages()),

    fetchChannel: id => dispatch(fetchChannel(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatIndex);
