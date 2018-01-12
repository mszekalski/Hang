import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';

const Welcome = (props) => {

  return (
    <div className="logout-buttom-div">
      <button
        className="logout-button"
        onClick={props.logout}>
        Logout
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect (
  null,
  mapDispatchToProps
)(Welcome);
