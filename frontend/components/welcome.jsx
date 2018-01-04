import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const Welcome = (props) => {
  return (
    <div>
      <button onClick={props.logout}>LOGOUT</button>
      Hello
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect (
  null,
  mapDispatchToProps
)(Welcome);
