import React from "react";
import MembersIndexItem from "./members_index_item";

class MembersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (Object.values(this.props.users).length === 0) {
      return null;
    } else {
      return this.props.currentConversation.member_ids.map(memberId => {
        return (
          <MembersIndexItem
            key={memberId}
            member={this.props.users[memberId]}
            currentUser={this.props.currentUser}
          />
        );
      });
    }
  }
}

export default MembersIndex;
