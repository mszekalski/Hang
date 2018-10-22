import { connect } from "react-redux";
import {
  fetchChannels,
  deleteChannel,
  receiveChannel,
  fetchChannel
} from "../../actions/channel_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import { fetchDirectThreads } from "../../actions/direct_thread_actions.js";
import Sidebar from "./sidebar";
import { openModal } from "../../actions/modal_actions.js";

const mapStateToProps = state => {
  return {
    channels: Object.values(state.channels),
    directThreads: Object.values(state.directThreads),
    user: state.session.currentUser,
    currentConversation: state.ui.currentConversation || {},
    users: state.users || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    fetchDirectThreads: () => dispatch(fetchDirectThreads()),
    deleteChannel: id => dispatch(deleteChannel(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
