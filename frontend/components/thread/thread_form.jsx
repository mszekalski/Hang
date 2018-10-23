import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import UsersIndex from "./users_index";
import MembersIndex from "./members_index";

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
    this.removeUser = this.removeUser.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createDirectThread(
        this.state.newDirectThread,
        this.state.membershipArray
      )
      .then(payload => {
        this.props.history.push(
          `/home/directThreads/${payload.directThread.id}`
        );
        this.hide();
      });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  hide() {
    this.setState({ membershipArray: [], usersSearch: "" });
    this.props.closeModal();
  }

  addUser(id) {
    const newMembershipArray = this.state.membershipArray.slice(0);
    if (newMembershipArray.length < 9) {
      newMembershipArray.push(id);
      this.setState({ membershipArray: newMembershipArray });
    }
  }

  removeUser(id) {
    const newMembershipArray = this.state.membershipArray.slice(0);
    const index = newMembershipArray.indexOf(id);
    newMembershipArray.splice(index, 1);
    this.setState({ membershipArray: newMembershipArray });
  }

  renderUsersList() {
    if (this.state.membershipArray.length < 9) {
      return (
        <div className="users-index-list-container">
          <div className="users-index-list">
            <UsersIndex
              users={this.props.users}
              search={this.state.usersSearch}
              currentUser={this.props.currentUser}
              membershipArray={this.state.membershipArray}
              addUser={this.addUser}
            />
          </div>
        </div>
      );
    }
  }

  renderUsersListHeader() {
    if (this.state.membershipArray.length < 1) {
      return (
        <div className="users-thread-div-header">
          <span className="no-users-text-thread">
            Add some users to your conversation
          </span>
        </div>
      );
    } else if (this.state.membershipArray.length < 9) {
      return (
        <div className="users-thread-div-header">
          <span className="users-text-thread">
            You can add {9 - this.state.membershipArray.length} more people
          </span>
        </div>
      );
    } else {
      return (
        <div className="users-thread-div-header">
          <span className="users-text-thread">
            You've reached the maximum number of participants
          </span>
        </div>
      );
    }
  }

  render() {
    return (
      <div id="thread-form-container" className="thread-form-container">
        <button className="cancel-button-membership" onClick={this.hide}>
          <span className="membership-x">X</span>
          <span className="esc">esc</span>
        </button>
        <div className="thread-form-div">
          <form onSubmit={this.handleSubmit} className="thread-form-inner">
            <div className="thread-input-div">
              <div className="new-thread-title">Direct Messages</div>
              <div className="thread-input-outer">
                <div className="thread-input-inner">
                  <MembersIndex
                    users={this.props.users}
                    currentUser={this.props.currentUser}
                    membershipArray={this.state.membershipArray}
                    removeUser={this.removeUser}
                  />
                  <input
                    className="search-users"
                    type="text"
                    onChange={this.update("usersSearch")}
                    value={this.state.usersSearch}
                    placeholder="Find or start a conversation"
                  />
                </div>
                <div className="button-wrapper">
                  <button
                    className="thread-submit-button"
                    type="submit"
                    value="text"
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
            {this.renderUsersListHeader()}
            {this.renderUsersList()}
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ThreadForm);
