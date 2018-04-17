import React from "react";
import MembersIndexItem from "./members_index_item";

class MembersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.currentChannel.member_ids.map(memberId => {
      return (
        <MembersIndexItem key={memberId} member={this.props.users[memberId]} />
      );
    });
  }
}

export default MembersIndex;
