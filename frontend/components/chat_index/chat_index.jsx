import React from "react";
import { withRouter } from "react-router";
import moment from "moment";

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

  renderChatLog() {
    return this.props.messages.map(message => {
      let timestamp = moment
        .utc(message.created_at)
        .local()
        .format("h:mm A");
      if (
        this.props.currentConversation.id === message.chatable_id &&
        message.chatable_type === "Channel"
      ) {
        return (
          <li key={`chat_${message.id}`} className="chat-message">
            <span className="chat-username">{message.authorName}</span>
            <span className="chat-timestamp">{timestamp}</span>
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
