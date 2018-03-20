import { connect } from 'react-redux';
import { createChannel, fetchChannel } from '../../actions/channel_actions.js';
import { fetchAllUsers } from '../../actions/user_actions.js';
import ChannelForm from './channel_form';

const mapStateToProps = (state) => {
  
  return {

    errors: state.errors.channels
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createChannel: channel => dispatch(createChannel(channel)),
    fetchChannel: channel => dispatch(fetchChannel(channel)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);
