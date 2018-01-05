import React from "react";
import { connect } from 'react-redux';
import { withRouter, Link, Route, Redirect } from 'react-router-dom';


const Auth = ({component: Component, path, loggedIn, exact}) => (
  <Route exact={exact} path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/home" />
    )
  )}/>
);

const Protected = ({component: Component, path, loggedIn, exact}) => {
  debugger
  return (

    <Route exact={exact} path={path} render={(props) => (
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      )}/>
  );
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
