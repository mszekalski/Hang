import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import UsersIndex from "./users_index";

class ThreadForm extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.hide = this.hide.bind(this);
    let newThread = {
      creator_id: this.props.currentUser.id,
      membershipable_type: "Thread"
    };
    this.state = newThread;
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  hide() {
    document.getElementById("thread-form-container").classList.add("hidden");
  }

  render() {
    return (
      <div id="thread-form-container" className="hidden">
        <h1 className="new-thread-title">Direct Messages</h1>
        <button className="cancel-button-membership" onClick={this.hide}>
          <span className="membership-x">X</span>
          <span className="esc">esc</span>
          <UsersIndex users={this.props.users} />
        </button>
      </div>
    );
  }
}

export default withRouter(ThreadForm);
