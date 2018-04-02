import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class MembershipForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hide = this.hide.bind(this);
    let newMembership = { channel_id: null, user_id: this.user.id };
    this.state = newMembership;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMembership(this.state).then(payload => {
      this.hide();
      this.props.history.push(`/home/${payload.channel.id}`);
    });
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
    this.setState({
      topic: ""
    });
    document
      .getElementById("membership-form-container")
      .classList.add("hidden");

    if (this.props.errors.length > 0) {
      this.props.clearErrors();
    }
  }

  render() {
    return (
      <div id="membership-form-container" className="hidden">
        <div className="membership-form">
          <div className="new-membership-title-container">
            <h1 className="new-membership-title">Browse Channels</h1>
          </div>
          <div className="membership-description-container">
            <p className="new-membership-description">
              Channels are where your members communicate. They&apos;re best
              when organized around a topic -- #leads, for example.
            </p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="membership-name-id"
              className="membership-name-input"
              type="text"
              value={this.state.topic}
              onChange={this.update("topic")}
              placeholder="Seach Channels"
            />

            <footer className="membership-form-footer">
              {this.renderChannelErrors()}
              <button className="membership-button" type="submit" value="text">
                Create Channel
              </button>

              <input
                className="cancel-button"
                type="button"
                value="Cancel"
                onClick={this.hide}
              />
            </footer>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(MembershipForm);
