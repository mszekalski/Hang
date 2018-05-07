import React from "react";

class UsersIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="user-name-li">{this.props.name}</div>;
  }
}

export default UsersIndexItem;
