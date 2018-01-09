import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ChatForm from './chat_form';
import { fetchAllMessages } from '../../actions/chat_message_actions';
import { values } from 'lodash';


const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    messages: values(state.messages)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllMessages: () => dispatch(fetchAllMessages())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChatForm);
