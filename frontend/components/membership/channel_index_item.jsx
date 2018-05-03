import React from "react";

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    let newMembership = {
      membershipable_id: this.props.channel.id,
      membershipable_type: "Channel",
      user_id: this.props.user.id
    };
    this.state = newMembership;
  }

  handleClick(e) {
    e.preventDefault();

    if (!this.props.channel.member_ids.includes(this.props.user.id)) {
      this.props.createMembership(this.state).then(payload => {
        this.props.hide();
        this.props.history.push(`/home/${payload.channel.id}`);
      });
    } else {
      this.props.receiveChannel(this.props.channel);
      this.props.hide();
      this.props.history.push(`/home/${this.props.channel.id}`);
    }
  }

  render() {
    return (
      <div className="channel-search-li" onClick={this.handleClick}>
        # {this.props.channel.topic}
      </div>
    );
  }
}

export default ChannelIndexItem;
