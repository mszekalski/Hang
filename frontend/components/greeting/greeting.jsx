import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

const notLoggedIn = () => {

  return (

    <div>
      <header className="header-navbar">
        <a href="/" className="navbar-link">
          <h1 className="header-logo">
            <img className="hash-logo" src={window.staticImages.logoImage}/>
            Hang</h1>
        </a>
      </header>
    </div>
  );
};

const loggedIn = (user, logout) => (
  <div>
    <h1>Welcome {user.username}</h1>
    <input type="submit" value="Log Out" onClick={logout}/>
  </div>
);

const Greeting = ({ user, logout }) => {

  return (

    user ? loggedIn(user, logout) : notLoggedIn()
  );
};

export default Greeting;

// <Link className="signup-link" to={"/signup"}>Sign Up</Link>
// <Link className="login-link" to={"/login"}>Sign In</Link>
