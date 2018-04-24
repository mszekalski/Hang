import React from "react";
import WelcomeContainer from "./welcome_container";

class Welcome extends React.Component {
  dropdown() {
    document.getElementById("profile-dropdown").classList.toggle("show");
  }

  // window.onClick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }

  render() {
    return (
      <div className="dropdown">
        <button onClick={this.dropdown} className="dropbtn">
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
        <div id="profile-dropdown" className="dropdown-content">
          <div className="logout-button-div">
            <button className="logout-button" onClick={this.props.logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
