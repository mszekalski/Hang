import { connect } from "react-redux";
import {
  createDirectThread,
  fetchDirectThread,
  clearErrors
} from "../../actions/direct_thread_actions.js";
import { createMembership } from "../../actions/membership_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import ThreadForm from "./thread_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.thread,
    currentUser: state.session.currentUser,
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDirectThread: directThread =>
      dispatch(createDirectThread(directThread)),
    fetchDirectThread: directThread =>
      dispatch(fetchDirectThread(directThread)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    clearErrors: () => dispatch(clearErrors()),
    createMembership: membership => dispatch(createMembership(membership))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadForm);
