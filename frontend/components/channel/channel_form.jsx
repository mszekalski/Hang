import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hide = this.hide.bind(this);
    let newChannel = {
      topic: "",
      purpose: "",
      creator_id: this.props.currentUser.id,
      private: false
    };
    this.state = newChannel;
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      if (e.target.type === "checkbox") {
        this.setState({ private: e.target.checked });
      } else {
        this.setState({ [field]: e.target.value });
      }
    };
  }

  renderHeader() {
    if (this.state.private === false) {
      return "Create a channel";
    } else {
      return "Create a private channel";
    }
  }

  renderSliderText() {
    if (this.state.private === false) {
      return "Anyone in your workspace can view this channel";
    } else {
      return "This channel can only be joined or viewed by invite";
    }
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
      topic: "",
      purpose: "",
      private: false
    });
    document.getElementById("channel-form-container").classList.add("hidden");
    document.getElementById("channel-name-id").value = "";
    document.getElementById("channel-purpose-id").value = "";
    if (this.props.errors.length > 0) {
      this.props.clearErrors();
    }
  }

  render() {
    return (
      <div id="channel-form-container" className="hidden">
        <div className="channel-form">
          <div className="new-channel-title-container">
            <h1 className="new-channel-title">{this.renderHeader()}</h1>
            <button className="cancel-button-membership" onClick={this.hide}>
              <span className="membership-x">X</span>
              <span className="esc">esc</span>
            </button>
          </div>
          <div className="channel-description-container">
            <p className="new-channel-description">
              Channels are where your members communicate. They&apos;re best
              when organized around a topic -- #leads, for example.
            </p>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="slider-div">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={this.state.private}
                  onClick={this.update()}
                />
                <span className="slider round" />
              </label>
              {this.renderSliderText()}
            </div>

            <div>Name</div>
            <input
              id="channel-name-id"
              className="channel-name-input"
              type="text"
              value={this.state.topic}
              onChange={this.update("topic")}
              placeholder="e.g leads"
            />
            <div>Purpose(optional)</div>
            <input
              id="channel-purpose-id"
              className="channel-purpose-input"
              type="text"
              value={this.state.purpose}
              onChange={this.update("purpose")}
            />
            <div>What's this channel about?</div>

            <footer className="channel-form-footer">
              {this.renderChannelErrors()}
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
