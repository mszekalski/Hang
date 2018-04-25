import React from "react";
import { connect } from "react-redux";
import { withRouter, Link, Route, Redirect } from "react-router-dom";

const Auth = ({
  component: Component,
  path,
  loggedIn,
  exact,
  currentChannel,
  location
}) => (
  <Route
    exact={exact}
    path={path}
    render={props =>
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={`${location.pathname}`} />
      )
    }
  />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={props =>
        loggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentChannel: state.ui.currentChannel || {}
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
