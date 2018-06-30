import { connect } from "react-redux";
import {
  fetchChannels,
  receiveChannel
} from "../../actions/channel_actions.js";
import {
  createMembership,
  fetchMembership,
  clearErrors
} from "../../actions/membership_actions.js";
import MembershipForm from "./membership_form";
import { closeModal } from "../../actions/modal_actions.js";

const mapStateToProps = state => {
  return {
    channels: Object.values(state.channels),
    user: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMembership: membership => dispatch(createMembership(membership)),
    fetchChannels: channel => dispatch(fetchChannels(channel)),
    receiveChannel: channel => dispatch(receiveChannel(channel)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MembershipForm);
