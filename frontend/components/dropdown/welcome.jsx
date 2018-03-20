import React from 'react';
import WelcomeContainer from './welcome_container';

class Welcome extends React.Component {

  componentDidMount() {
    // this.props.fetchAllUsers();
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
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
        <button onClick={ this.myFunction } className="dropbtn">
          {this.props.user.username}
        </button>
        <div id="myDropdown" className="dropdown-content">
          <div className="logout-button-div">
            <button
              className="logout-button"
              onClick={ this.props.logout }>
              Logout
            </button>
          </div>

        </div>
      </div>
    );
}


    // <div className="logout-button-div">
    //   <button
    //     className="logout-button"
    //     onClick={props.logout}>
    //     Logout
    //   </button>
    // </div>

}

export default Welcome;
