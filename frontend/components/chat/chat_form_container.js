import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ChatForm from './chat_form';
import { fetchAllMessages, receiveMessage } from '../../actions/chat_message_actions';
import { fetchChannel } from '../../actions/channel_actions';
// import { values } from 'lodash';


const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
    // currentChannel: state.channels[state.ui.currentChannel] || {}

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // logout: () => dispatch(logout()),
    // fetchAllMessages: () => dispatch(fetchAllMessages()),
    // receiveMessage: (message) => {
      // return dispatch(receiveMessage(message));
    // },
    // fetchChannel: (id) => dispatch(fetchChannel(id))
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChatForm);
