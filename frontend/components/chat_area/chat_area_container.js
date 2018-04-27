import { connect } from "react-redux";
import ChatArea from "./chat_area";
import { fetchChannel, receiveChannel } from "../../actions/channel_actions";
import { fetchAllUsers } from "../../actions/user_actions";

const mapStateToProps = state => {
  return {
    currentChannel: state.channels[state.ui.currentChannel] || {},
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchChannel: id => dispatch(fetchChannel(id)),
    receiveChannel: channel => dispatch(receiveChannel(channel))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatArea);
