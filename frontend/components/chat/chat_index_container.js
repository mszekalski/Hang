import { connect } from 'react-redux';
import { fetchAllMessages } from '../../actions/chat_message_actions.js';
import ChatForm from './chat_form';


const mapStateToProps = (state) => {
  return {
    messages: Object.values(state.messages)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllMessages: () => dispatch(fetchAllMessages())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChatForm);
