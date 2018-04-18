import { connect } from "react-redux";
import { fetchChannel } from "../../actions/channel_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import InfoSidebar from "./info_sidebar";

const mapStateToProps = state => {
  return {
    currentChannel: state.channels[state.ui.currentChannel] || {
      member_ids: []
    },
    users: state.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchChannel: () => dispatch(fetchChannel())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoSidebar);
