import React from "react";
import { withRouter } from "react-router";

class ChatIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllMessages();
  }

  // componentDidMount() {
  //   this.props.fetchChannel(this.props.match.params.channelId).then(() => {
  //     this.props.fetchAllMessages().then(this.scrollToBottom);
  //   });
  // }

  componentWillReceiveProps(newProps) {
    // this.scrollToBottom(document.getElementById("chat-logs"));
    this.setState({ chatLogs: newProps.messages });
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.match.params.channelId !== prevProps.match.params.channelId) {
  //     this.scrollToBottom();
  //   }
  // }

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
