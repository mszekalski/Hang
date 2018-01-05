import React from "react";
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';



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

  renderLinks() {
    return (
    <div className="session-links">
      <Route path='/signup' render={() => (<span>Already using Hang?
          <Link to="/login"> Sign in.</Link>
        </span>)}
        />
      <Route path='/login' render={() => (<span>Don't have an account yet?
          <Link to="/signup"> Sign up.</Link>
        </span>)}
        />
    </div>
  );
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
    const text = this.props.formType === "login" ? "Log In" : "Sign Up";
    return (
      <div>

      <div className="session-form-container">
        <form onSubmit={this.handleSubmit}
          className="session-form-box">
          {this.renderErrors()}
          <h1 className="login-title">Enter a <b>username</b> and <b>password</b></h1>
          <input
            placeholder="Username"
            className="session-input username"
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            />

          <input
            className="session-input password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
            />

          <input
            type="submit"
            value={text}
            className="session-button"
            />
          <br/>
          <br/>
            {this.renderLinks()}
        </form>
        </div>
      </div>
    );
  }

}

export default withRouter(SessionForm);
