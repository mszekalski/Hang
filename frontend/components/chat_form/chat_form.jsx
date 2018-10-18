import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Cable from "actioncable";

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChatMessage: ""
    };
    this.handleChatInputKeyPress = this.handleChatInputKeyPress.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  createSocket() {
    let cable = Cable.createConsumer();
    this.chats = cable.subscriptions.create(
      {
        channel: "ChatChannel"
      },
      {
        connected: () => {},
        received: data => {
          return this.props.receiveMessage(data);
        },
        create: function(chatContent) {
          this.perform("create", {
            content: chatContent.message,
            user_id: chatContent.user_id,
            chatable_id: chatContent.chatable_id,
            chatable_type: chatContent.chatable_type
          });
        }
      }
    );
  }

  componentWillMount() {
    this.createSocket();
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create({
      message: this.state.currentChatMessage,
      user_id: this.props.user.id,
      chatable_id: this.props.currentConversation.id,
      chatable_type: this.props.currentConversation.type
    });
    this.setState({
      currentChatMessage: ""
    });
  }

  scrollToBottom() {
    const chatIndex = document.querySelector(".chat-index-overflow");
    chatIndex.scrollTop = chatIndex.scrollHeight;
    // }
  }

  handleChatInputKeyPress(event) {
    // if(event.key === 'Enter')
    event.preventDefault();
    this.handleSendEvent(event);
    setTimeout(this.scrollToBottom, 100);

    // }
  }

  updateCurrentChatMessage(event) {
    this.setState({
      currentChatMessage: event.target.value
    });
  }

  render() {
    return (
      <form
        className="chat-form"
        onSubmit={this.handleChatInputKeyPress}
        id="chat-form"
      >
        <input
          value={this.state.currentChatMessage}
          onChange={e => this.updateCurrentChatMessage(e)}
          type="text"
          placeholder="Message"
          className="chat-text"
        />
        <input type="submit" style={{ display: "none" }} />
      </form>
    );
  }
}

export default withRouter(ChatForm);
