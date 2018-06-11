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
      <div className="members-array-name-li">
        {this.props.users[this.props.member].username}
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default MembersIndexItem;
