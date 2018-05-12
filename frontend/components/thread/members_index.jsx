import React from "react";
import MembersIndexItem from "./members_index_item";

class MembersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (
      this.props.membershipArray.length === 0 ||
      Object.values(this.props.users).length === 0
    ) {
      return null;
    } else {
      return this.props.membershipArray.map(member => {
        return (
          <MembersIndexItem
            key={member}
            users={this.props.users}
            member={member}
          />
        );
      });
    }
  }
}

export default MembersIndex;
