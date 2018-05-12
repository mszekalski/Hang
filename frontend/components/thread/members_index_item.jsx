import React from "react";

class MembersIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="members-array-name-li" onClick={this.handleClick}>
        {this.props.user.username}
      </div>
    );
  }
}

export default MembersIndexItem;
