import React from "react";

class MembersIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="member-name-li">{this.props.member.username}</div>;
  }
}

export default MembersIndexItem;
