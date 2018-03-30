import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hide = this.hide.bind(this);
    let newChannel = { topic: "" };
    this.state = newChannel;
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state).then(payload => {
      this.hide();
      this.props.history.push(`/home/${payload.channel.id}`);
    });
  }

  renderChannelErrors() {
    if (this.props.errors.length > 0) {
      return (
        <ul className="channel-errors-list">
          <div className="channel-errors-list-container">
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`} className="channel-error-list-item">
                {error}
              </li>
            ))}
          </div>
        </ul>
      );
    }
  }

  hide() {
    this.setState({
      topic: ""
    });
    document.getElementById("channel-form-container").classList.add("hidden");
    document.getElementById("channel-name-id").value = "";
    this.props.clearErrors();
  }

  render() {
    return (
      <div id="channel-form-container" className="hidden">
        <div className="channel-form">
          <div className="new-channel-title-container">
            <h1 className="new-channel-title">Create a channel</h1>
          </div>
          <div className="channel-description-container">
            <p1 className="new-channel-description">
              Channels are where your members communicate. They&apos;re best
              when organized around a topic -- #leads, for example.
            </p1>
          </div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="channel-name-id"
              className="channel-name-input"
              type="text"
              value={this.state.topic}
              onChange={this.update("topic")}
              placeholder="e.g leads"
            />
            {this.renderChannelErrors()}
            <footer className="channel-form-footer">
              <button className="channel-button" type="submit" value="text">
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

export default withRouter(ChannelForm);
