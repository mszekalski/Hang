import { connect } from "react-redux";
import { fetchChannel } from "../../actions/channel_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import InfoSidebar from "./info_sidebar";

const mapStateToProps = state => {
  return {
    currentConversation: state.ui.currentConversation,
    users: state.users,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoSidebar);
