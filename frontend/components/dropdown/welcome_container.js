import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Welcome from "./welcome";

const mapStateToProps = state => {
  return {
    currentConversation: state.ui.currentConversation || {},
    user: state.session.currentUser,
    channels: state.channels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
