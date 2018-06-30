import { connect } from "react-redux";
import {
  createChannel,
  fetchChannel,
  clearErrors
} from "../../actions/channel_actions.js";
import { fetchAllUsers } from "../../actions/user_actions.js";
import { closeModal } from "../../actions/modal_actions.js";
import ChannelForm from "./channel_form";

const mapStateToProps = state => {
  return {
    errors: state.errors.channel,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChannel: channel => dispatch(createChannel(channel)),
    fetchChannel: channel => dispatch(fetchChannel(channel)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);
