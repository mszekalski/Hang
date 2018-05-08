import React from "react";
import UsersIndexItem from "./users_index_item";

class UsersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (Object.values(this.props.users).length === 0) {
      return null;
    } else {
      return Object.values(this.props.users).map(user => {
        if (
          user.username
            .toLowerCase()
            .includes(this.props.search.toLowerCase()) &&
          !this.props.membershipArray.includes(user.id)
        ) {
          return (
            <UsersIndexItem
              key={user.id}
              user={user}
              membershipArray={this.props.membershipArray}
            />
          );
        }
      });
    }
  }
}

export default UsersIndex;
