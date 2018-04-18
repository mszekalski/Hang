import React from "react";

class MembersIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMembersIndex() {
    if (this.props.member.id === this.props.currentUser.id) {
      return `${this.props.member.username} (you)`;
    } else {
      return `${this.props.member.username}`;
    }
  }

  render() {
    return <div className="member-name-li">{this.renderMembersIndex()}</div>;
  }
}

export default MembersIndexItem;
