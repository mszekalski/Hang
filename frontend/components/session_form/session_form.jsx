import React from "react";
import { withRouter, Link } from 'react-router';


class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}
              className="error-list-item"
              >
              {error}

            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit}
          className="login-form-box">
          <h1 className="log-in-title">{this.props.formType}</h1>
          <label>Username
            <input
              className="user-input"
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              />
          </label>

          <label>Password
            <input
              className="password-input"
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              />
          </label>
          {this.renderErrors()}
          <input
            type="submit"
            value={this.props.formType}
            className="user-button"
            />
        </form>

      </div>
    );
  }

}

export default withRouter(SessionForm);
