import { connect } from "react-redux";
import { createChannel, fetchChannel } from "../../actions/channel_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import ChatHeader from "./chat_header";

const mapStateToProps = state => {
  return {
    currentConversation: state.ui.currentConversation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannel: channel => dispatch(fetchChannel(channel))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatHeader);
