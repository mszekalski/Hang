import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import ChannelIndex from "./channel_index";

class MembershipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { membershipSearch: "" };
    this.hide = this.hide.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  hide() {
    this.setState({ membershipSearch: "" });

    this.props.closeModal();
  }

  render() {
    return (
      <div className="membership-content-container">
        <button className="cancel-button-membership" onClick={this.hide}>
          <span className="membership-x">X</span>
          <span className="esc">esc</span>
        </button>
        <div className="membership-contents">
          <div className="channel-browser">
            <div className="membership-header">Browse channels</div>
            <div className="search-membership-container">
              <div className="inner-membership-container">
                <input
                  className="search-membership"
                  type="text"
                  onChange={this.update("membershipSearch")}
                  value={this.state.membershipSearch}
                  placeholder="Search channels"
                />
              </div>
            </div>
            <ChannelIndex
              channels={this.props.channels}
              user={this.props.user}
              createMembership={this.props.createMembership}
              receiveChannel={this.props.receiveChannel}
              hide={this.hide}
              history={this.props.history}
              search={this.state.membershipSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MembershipForm);
