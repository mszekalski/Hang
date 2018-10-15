import React from "react";

class MembersIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.removeUser(this.props.member);
  }

  render() {
    return (
      <div className="members-array-name-li" onClick={this.handleClick}>
        {this.props.users[this.props.member].username}
        <span className="members-array-x">x</span>
      </div>
    );
  }
}

export default MembersIndexItem;
