import React from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import Typed from "typed.js";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.loggedIn) {
  //     this.props.history.push(`/`);
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(response => {
      this.props.history.push(
        `/home/${response.user.memberships[0].membershipable_id}`
      );
    });

    // for regular login - not demo .then(() => debugger);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderLinks() {
    return (
      <div className="session-links">
        <Route
          path="/signup"
          render={() => (
            <span>
              Already using Hang?
              <Link to="/login"> Sign in.</Link>
            </span>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <span>
              Don't have an account yet?
              <Link to="/signup"> Sign up.</Link>
            </span>
          )}
        />
      </div>
    );
  }

  demo(e) {
    this.setState({ username: "", password: "" });
    const guest = { username: "demo-user", password: "password" };
    const username = {
      strings: [guest.username],
      typeSpeed: 100
    };
    const password = {
      strings: [guest.password],
      typeSpeed: 100
    };

    this.setState({
      typeUsername: setTimeout(() => {
        new Typed(".session-username", username);
      }, 50),
      typePassword: setTimeout(() => {
        new Typed(".session-password", password);
      }, 800),
      typeSubmit: setTimeout(() => {
        if (this.props.formType === "login") {
          this.props.processForm(guest).then(response => {
            this.props.history.push(
              `/home/${response.user.memberships[0].membershipable_id}`
            );
          }); // for demo
        } else {
          this.props.login(guest).then(response => {
            this.props.history.push(
              `/home/${response.user.memberships[0].membershipable_id}`
            );
          }); // for demo
        }
      }, 1700)
    });
  }

  renderDemo() {
    return (
      <div className="demo-link">
        <Route
          path="/signup"
          render={() => (
            <span>
              <Link to="/login" onClick={this.demo}>
                Demo
              </Link>
            </span>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <span>
              <Link onClick={this.demo} to="#">
                Demo
              </Link>
            </span>
          )}
        />
      </div>
    );
  }

  renderTitle() {
    return (
      <div className="session-title">
        <Route path="/signup" render={() => <h1>Create an Account</h1>} />
        <Route path="/login" render={() => <h1>Sign in</h1>} />
      </div>
    );
  }

  renderErrors() {
    if (this.props.errors.length > 0) {
      return (
        <ul className="errors-list">
          <div className="error-list-container">
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`} className="error-list-item">
                {error}
              </li>
            ))}
          </div>
        </ul>
      );
    }
  }

  render() {
    const text = this.props.formType === "login" ? "Log In" : "Sign Up";
    return (
      <div>
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="session-form-box">
            {this.renderTitle()}
            {this.renderErrors()}
            <h1 className="login-title">
              Enter a <b>username</b> and <b>password</b>
            </h1>
            <input
              placeholder="Username"
              className="session-input session-username"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
            />

            <input
              className="session-input session-password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
            />

            <input type="submit" value={text} className="session-button" />
            <br />
            <br />
            {this.renderLinks()}
            {this.renderDemo()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
