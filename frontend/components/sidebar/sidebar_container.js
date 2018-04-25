import { connect } from "react-redux";
import {
  fetchChannels,
  deleteChannel,
  receiveChannel,
  fetchChannel
} from "../../actions/channel_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import Sidebar from "./sidebar";

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
    fetchChannel: id => dispatch(fetchChannel(id)),
    deleteChannel: id => dispatch(deleteChannel(id)),
    receiveChannel: channel => dispatch(receiveChannel(channel)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
