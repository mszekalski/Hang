import React from "react";
import { withRouter } from "react-router";

class ChatIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllMessages().then(() => this.scrollToBottom());
  }

  componentWillReceiveProps(newProps) {
    this.setState({ chatLogs: newProps.messages });
  }

  scrollToBottom() {
    const chatIndex = document.querySelector(".chat-index-overflow");
    chatIndex.scrollTop = chatIndex.scrollHeight;
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.channelId !== prevProps.match.params.channelId
    ) {
      this.scrollToBottom();
    }
  }

  // renderChatLog() {
  //   return this.props.messages.map((message) => {
  //     return (
  //       <li key={`${message.id}`} className="chat-message">
  //         <span className='chat-content'>{ message.content }</span>
  //         <span className='chat-timestamp'>{ message.created_at }</span>
  //       </li>
  //     );
  //   });
  // }

  renderChatLog() {
    return this.props.messages.map(message => {
      if (
        this.props.currentChannel.id === message.chatable_id &&
        message.chatable_type === "Channel"
      ) {
        return (
          <li key={`chat_${message.id}`} className="chat-message">
            <span className="chat-username">{message.authorName}</span>
            <span className="chat-timestamp">{message.created_at}</span>
            <br />
            <span className="chat-content">{message.content}</span>
          </li>
        );
      }
    });
  }

  render() {
    return (
      <div className="chat-index-overflow">
        <div className="chat-index">
          <ul>{this.renderChatLog()}</ul>
        </div>
      </div>
    );
  }
}

export default withRouter(ChatIndex);
