import { connect } from 'react-redux';

import { fetchAllMessages, receiveMessage } from '../../actions/chat_message_actions';
import { fetchChannel } from '../../actions/channel_actions';
import ChatIndex from './chat_form';


const mapStateToProps = (state) => {
  return {
    messages: Object.values(state.messages),
    currentChannel: state.channels[state.ui.currentChannel] || {}
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMessages: () => dispatch(fetchAllMessages()),
    receiveMessage: (message) => {
      return dispatch(receiveMessage(message));
    },
    fetchChannel: (id) => dispatch(fetchChannel(id))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChatIndex);
