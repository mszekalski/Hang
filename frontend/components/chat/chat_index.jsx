import React from 'react';
import ChatFormContainer from './chat_form_container';

class ChatIndex extends React.Component {

  componentDidMount() {
    
    this.props.fetchAllMessages();
  }

  renderChatLog() {
    return this.props.messages.map((message) => {
      return (
        <li key={`${message.id}`} className="chat-message">
          <span className='chat-content'>{ message.content }</span>
          <span className='chat-timestamp'>{ message.created_at }</span>
        </li>
      );
    });
  }

  render () {
    return (
      <div>
        <ul>
          {
            this.renderChatLog()
          }
        </ul>
        <ChatFormContainer/>
      </div>
    );
  }
}

export default ChatIndex;
