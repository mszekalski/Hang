import { connect } from "react-redux";

import { login, logout, signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { fetchChannel } from "../../actions/channel_actions.js";

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = formType === "login" ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    fetchChannel: id => dispatch(fetchChannel(id)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
