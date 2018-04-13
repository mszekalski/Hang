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

  // renderChannelErrors() {
  //   if (this.props.errors.length > 0) {
  //     return (
  //       <ul className="channel-errors-list">
  //         <div className="channel-errors-list-container">
  //           {this.props.errors.map((error, i) => (
  //             <li key={`error-${i}`} className="channel-error-list-item">
  //               {error}
  //             </li>
  //           ))}
  //         </div>
  //       </ul>
  //     );
  //   }
  // }

  hide() {
    // this.setState({
    //   channel_id: null,
    //   user_id: this.user.id
    // });
    this.setState({ membershipSearch: "" });

    document
      .getElementById("membership-form-container")
      .classList.add("hidden");
    // if (this.props.errors.length > 0) {
    //   this.props.clearErrors();
    // }
  }

  render() {
    return (
      <div id="membership-form-container" className="hidden">
        <div className="content-container">
          <div className="membership-contents">
            <button className="cancel-button-membership" onClick={this.hide}>
              <span className="membership-x">X</span>
              <span className="esc">esc</span>
            </button>
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
      </div>
    );
  }
}

// <input
//   className="cancel-button-membership"
//   type="button"
//   value="X"
//   onClick={this.hide}
// />

export default withRouter(MembershipForm);
