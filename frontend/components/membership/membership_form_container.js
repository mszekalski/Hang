import { connect } from "react-redux";
import { fetchChannels } from "../../actions/channel_actions.js";
import {
  createMembership,
  fetchMembership,
  clearErrors
} from "../../actions/membership_actions.js";
import MembershipForm from "./membership_form";

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
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MembershipForm);
