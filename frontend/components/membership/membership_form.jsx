import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import ChannelIndex from "./channel_index";

class MembershipForm extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.hide = this.hide.bind(this);
    // let newMembership = { channel_id: null, user_id: this.user.id };
    // this.state = newMembership;
  }

  // update(field) {
  //   return e => {
  //     this.setState({ [field]: e.target.value });
  //   };
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.createMembership(this.state).then(payload => {
  //     this.hide();
  //     this.props.history.push(`/home/${payload.channel_id}`);
  //   });
  // }

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
        <ChannelIndex channels={this.props.channels} user={this.props.user} />
        <input
          className="cancel-button"
          type="button"
          value="Cancel"
          onClick={this.hide}
        />
      </div>
    );
  }
}

export default withRouter(MembershipForm);
