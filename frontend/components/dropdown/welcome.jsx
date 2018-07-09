import React from "react";
import WelcomeContainer from "./welcome_container";

import onClickOutside from "react-onclickoutside";

class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.renderDropdown = this.renderDropdown.bind(this);
  }

  handleClickOutside() {
    return this.state.show ? this.handleShow() : null;
  }

  handlShow() {
    return this.state.show
      ? this.setState({ show: false })
      : this.setState({ show: true });
  }

  renderDropdown() {
    if (this.state === true) {
      return (
        <div id="profile-dropdown" className="dropdown-content">
          <div className="logout-button-div">
            <button className="logout-button" onClick={this.props.logout}>
              Logout
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="dropdown">
        <button onClick={this.handlShow} className="dropbtn">
          <div className="top-dropdown-div">
            <div className="currentchannel-div">
              # {this.props.currentChannel.topic}
            </div>
            <div className="arrow-div">&#x25BE;</div>
          </div>

          <div className="username-div">
            <span className="dot" />
            {this.props.user.username}
          </div>
        </button>
        {this.renderDropdown()}
      </div>
    );
  }
}

export default onClickOutside(Welcome);
