import React from "react";

class UsersIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.membershipArray.push(this.props.user.id);
    debugger;
  }

  render() {
    return (
      <div className="user-name-li" onClick={this.handleClick}>
        {this.props.user.username}
      </div>
    );
  }
}

export default UsersIndexItem;
