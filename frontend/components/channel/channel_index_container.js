import { connect } from 'react-redux';
import { fetchChannels, deleteChannel } from '../../actions/channel_actions.js';
import ChannelIndex from './channel_index';


const mapStateToProps = (state) => {
  return {
    channels: Object.values(state.channels)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannels: () => dispatch(fetchChannels()),
    deleteChannel: id => dispatch(deleteChannel(id))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
