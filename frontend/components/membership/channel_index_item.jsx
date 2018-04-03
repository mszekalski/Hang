import React from "react";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    let newMembership = {
      channel_id: this.props.channel.id,
      user_id: this.props.user.id
    };
    this.state = newMembership;
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createMembership(this.state).then(payload => {
      this.props.hide();
      this.props.history.push(`/home/${payload.channel_id}`);
    });
  }

  render() {
    return (
      <li className="channel-search-li" onClick={this.handleClick}>
        {this.props.channel.topic}
      </li>
    );
  }
}

export default ChannelIndexItem;
