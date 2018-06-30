import { connect } from "react-redux";
import {
  fetchChannels,
  deleteChannel,
  receiveChannel,
  fetchChannel
} from "../../actions/channel_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import Sidebar from "./sidebar";
import { openModal } from "../../actions/modal_actions.js";

const mapStateToProps = state => {
  return {
    channels: Object.values(state.channels),
    user: state.session.currentUser,
    currentChannel: state.channels[state.ui.currentChannel] || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    deleteChannel: id => dispatch(deleteChannel(id)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
