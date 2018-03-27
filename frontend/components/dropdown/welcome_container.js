import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Welcome from "./welcome";

const mapStateToProps = state => {
  return {
    currentChannel: state.channels[state.ui.currentChannel] || {},
    user: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
