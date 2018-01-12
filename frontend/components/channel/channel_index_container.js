import { connect } from 'react-redux';
import { fetchChannels,
        deleteChannel,
        receiveChannel } from '../../actions/channel_actions.js';
import { fetchAllUsers } from '../../actions/user_actions.js';
import ChannelIndex from './channel_index';


const mapStateToProps = (state) => {

  return {
    channels: Object.values(state.channels),
    user: state.session.currentUser,
    currentChannel: state.channels[state.ui.currentChannel] || {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    deleteChannel: id => dispatch(deleteChannel(id)),
    receiveChannel: channel => dispatch(receiveChannel(channel)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };

};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
