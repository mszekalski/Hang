import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Cable from 'actioncable';
import ChannelIndexContainer from '../channel/channel_index_container';


class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChatMessage: ''
    };
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create({message: this.state.currentChatMessage,
    user_id: this.props.user.id,
    channel_id: this.props.currentChannel.id});
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
    let cable = Cable.createConsumer();
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      connected: () => {},
      received: (data) => {

        this.props.receiveMessage(data);
      },
      create: function(chatContent) {
        this.perform('create', {
          content: chatContent.message,
          user_id: chatContent.user_id,
          channel_id: chatContent.channel_id
        });
      }
    });
  }

  renderChatLog() {
    return this.props.messages.map((message) => {
      if (this.props.currentChannel.id === message.channel_id ) {
        return (
          <li key={`chat_${message.id}`} className="chat-message">
            <span className='chat-content'>{ message.content }</span>
            <br/>
            <span className='chat-timestamp'>{ message.created_at }</span>
            <br/>
            <span className='chat-username'>{ message.user_id }</span>
          </li>
        );
      }
    });
  }

  componentWillReceiveProps(newProps) {
    this.setState({ chatLogs: newProps.messages });
  }

  componentWillMount() {

    this.createSocket();
  }
  componentDidMount() {

    this.props.fetchAllMessages();
  }


  render() {
    return (
      <div className='chat-form'>
        <ChannelIndexContainer />
        <div className='stage'>

          <h1 className="channel-topic-header"># {this.props.currentChannel.topic}</h1>
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
