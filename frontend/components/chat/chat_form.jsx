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
    this.handleChatInputKeyPress = this.handleChatInputKeyPress.bind(this);
  }


  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create({message: this.state.currentChatMessage,
    user_id: this.props.user.id,
    username: this.props.user.username,
    channel_id: this.props.currentChannel.id});
    this.setState({
      currentChatMessage: ''
    });
    setTimeout(this.scrollToBottom, 100);

  }


  handleChatInputKeyPress(event) {
    // if(event.key === 'Enter')

    event.preventDefault();

    this.handleSendEvent(event);
    // }
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

        return this.props.receiveMessage(data);
      },
      create: function(chatContent) {

        this.perform('create', {
          content: chatContent.message,
          user_id: chatContent.user_id,
          channel_id: chatContent.channel_id,
          username: chatContent.username
        });

      }
    });

  }

  renderChatLog() {

    return this.props.messages.map((message) => {
      if (this.props.currentChannel.id === message.channel_id ) {
        return (

            <li key={`chat_${message.id}`} className="chat-message">
              <span className='chat-username'>{ message.authorName }</span>
              <span className='chat-timestamp'>{ message.created_at }</span>
              <br/>
              <span className='chat-content'>{ message.content }</span>

            </li>

        );
      }
    });
  }

  scrollToBottom() {

    // elmnt.scrollIntoView(false); // Bottom
    window.scrollTo(0 ,document.getElementById("chat-logs").scrollHeight);
  }

  componentWillReceiveProps(newProps) {
    // this.scrollToBottom(document.getElementById("chat-logs"));
    this.setState({ chatLogs: newProps.messages });

  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
      this.scrollToBottom();

    }

  }



  componentWillMount() {

    this.createSocket();
  }

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.channelId).then(() => {
      this.props.fetchAllMessages().then(this.scrollToBottom);

    });



  }




  render() {

    return (
      <div className='chat-page'>

        <ChannelIndexContainer />
        <div className='chat-display' >
          <div className="channel-header-div">
            <h1 className="channel-topic-header">#
              {this.props.currentChannel.topic}</h1>
          </div>
          <div className="chat-logs-div">
            <ul className='chat-logs' id="chat-logs">
              { this.renderChatLog() }
            </ul>
          </div>
            <form
              className="chat-form"
              onSubmit={this.handleChatInputKeyPress}
              id='chat-form'
              >
              <input

                value={ this.state.currentChatMessage }
                onChange={ (e) => this.updateCurrentChatMessage(e) }
                type='text'
                placeholder='Message #placeholder'
                className='chat-input'
                />
              <input type='submit' style={ { display: 'none'} } />
            </form>
        </div>

      </div>
    );
  }
}

export default withRouter(ChatForm);
// onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
