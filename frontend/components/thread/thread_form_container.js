import { connect } from "react-redux";
import {
  createThread,
  fetchThread,
  clearErrors
} from "../../actions/thread_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import ThreadForm from "./thread_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.thread,
    currentUser: state.session.currentUser,
    users: state.session.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createThread: thread => dispatch(createThread(thread)),
    fetchThread: thread => dispatch(fetchThread(thread)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThreadForm);
