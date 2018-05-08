import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import UsersIndex from "./users_index";

class ThreadForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hide = this.hide.bind(this);
    let newDirectThread = {
      creator_id: this.props.currentUser.id
    };

    this.state = { newDirectThread, usersSearch: "", membershipArray: [] };
    this.addUser = this.addUser.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.createDirectThread(this.state.newDirectThread).then(() => {
      this.hide();
    });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  hide() {
    document.getElementById("thread-form-container").classList.add("hidden");
  }

  addUser(id) {
    const newMembershipArray = this.state.membershipArray.slice(0);
    newMembershipArray.push(id);
    this.setState({ membershipArray: newMembershipArray });
  }

  render() {
    return (
      <div id="thread-form-container" className="hidden">
        <h1 className="new-thread-title">Direct Messages</h1>
        <button className="cancel-button-membership" onClick={this.hide}>
          <span className="membership-x">X</span>
          <span className="esc">esc</span>
        </button>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              className="search-users"
              type="text"
              onChange={this.update("usersSearch")}
              value={this.state.usersSearch}
              placeholder="Find or start a conversation"
            />
          </div>
          <UsersIndex
            users={this.props.users}
            search={this.state.usersSearch}
            currentUser={this.props.currentUser}
            membershipArray={this.state.membershipArray}
            addUser={this.addUser}
          />
          <button className="thread-button" type="submit" value="text">
            Go
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ThreadForm);
