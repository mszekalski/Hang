import { connect } from "react-redux";
import {} from "../../actions/channel_actions.js";
import {} from "../../actions/user_actions.js";
import MembershipForm from "./membership_form";

const mapStateToProps = state => {
  return {
    channels: state.channels
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MembershipForm);
