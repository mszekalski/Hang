import { connect } from 'react-redux';
import { createChannel, fetchChannel } from '../../action/channel_action.js';
import { fetchAllUsers } from '../../actions/user_action.js';
import ChannelForm from './channel_form';

const mapStateToProps = state => {
  let channel = { topic: '' };
  return channel;
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
