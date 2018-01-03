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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.props.formType}</h1>

          <label>Username
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              />
          </label>

          <label>Password
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              />
          </label>


          <input type="submit" value={this.props.formType}/>
        </form>

      </div>
    );
  }

}

export default withRouter(SessionForm);
