import React from "react";
import { withRouter, Link } from 'react-router';


class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
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

          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            />

          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            />

          
        </form>

      </div>
    );
  }

}


export default withRouter(SessionForm);
