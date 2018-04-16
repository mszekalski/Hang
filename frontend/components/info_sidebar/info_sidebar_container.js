import { connect } from "react-redux";
import { fetchChannels } from "../../actions/channel_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import InfoSidebar from "./info_sidebar";

const mapStateToProps = state => {
  return {
    users: Object.values(state.users),
    currentChannel: state.channels[state.ui.currentChannel] || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchChannels: () => dispatch(fetchChannels())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoSidebar);
