import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import ChatForm from './chat_form';


const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(ChatForm);
