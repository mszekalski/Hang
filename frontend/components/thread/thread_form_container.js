import { connect } from "react-redux";
import {
  createDirectThread,
  fetchDirectThread,
  clearErrors
} from "../../actions/direct_thread_actions.js";

import { fetchAllUsers } from "../../actions/user_actions.js";
import ThreadForm from "./thread_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.thread,
    currentUser: state.session.currentUser,
    users: state.users,
    directThreads: state.directThreads
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createDirectThread: (directThread, members) =>
      dispatch(createDirectThread(directThread, members)),
    fetchDirectThread: directThread =>
      dispatch(fetchDirectThread(directThread)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadForm);
