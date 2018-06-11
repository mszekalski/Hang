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
          !this.props.membershipArray.includes(user.id) &&
          user.username.toLowerCase().includes(this.props.search.toLowerCase())
        ) {
          return (
            <UsersIndexItem
              key={user.id}
              user={user}
              membershipArray={this.props.membershipArray}
              addUser={this.props.addUser}
            />
          );
        }
      });
    }
  }
}

export default UsersIndex;
