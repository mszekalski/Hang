import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cable from 'ActionCable';

class ChatForm extends Component {
  constructor(props) {
  super(props);
  this.state = {
    currentChatMessage: '',
    chatLogs: []
  };
}

handleSendEvent(event) {
  event.preventDefault();
  this.chats.create(this.state.currentChatMessage);
  this.setState({
    currentChatMessage: ''
  });
}


handleChatInputKeyPress(event) {
  if(event.key === 'Enter') {
    this.handleSendEvent(event);
  }
}

updateCurrentChatMessage(event) {
  this.setState({
    currentChatMessage: event.target.value
  });
}

createSocket() {
  let cable = Cable.createConsumer('ws://localhost:3000/cable');

  this.chats = cable.subscriptions.create({
    channel: 'ChatChannel'
  }, {
    connected: () => {},
    received: (data) => {
      let chatLogs = this.state.chatLogs;
      chatLogs.push(data);
      this.setState({ chatLogs: chatLogs });
    },
    create: function(chatContent) {
      this.perform('create', {
        content: chatContent
      });
    }
  });
}

renderChatLog() {
  return this.state.chatLogs.map((message) => {
    return (
      <li key={`chat_${message.id}`} className="chat-message">
        <span className='chat-content'>{ message.content }</span>
        <span className='chat-timestamp'>{ message.created_at }</span>
      </li>
    );
  });
}

componentWillMount() {
  this.createSocket();
}

  render() {
    return (
      <div className='ChatForm'>
        <div className='stage'>
          <h1>Channel Name</h1>
            <ul className='chat-logs'>
              { this.renderChatLog() }

            </ul>
            <input
              onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
              value={ this.state.currentChatMessage }
              onChange={ (e) => this.updateCurrentChatMessage(e) }
              type='text'
              placeholder='Message #placeholder'
              className='chat-input'

            />
        </div>
      </div>
    );
  }
}

export default withRouter(ChatForm);
