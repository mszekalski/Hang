import React from 'react';
import { Link } from 'react-router-dom';


const notLoggedIn = () => (
  <div>
    <Link to={"/login"}>Sign In</Link>
    <br></br>
    <Link to={"/signup"}>Sign Up</Link>
  </div>
);

const loggedIn = (user, logout) => (
  <div>


    <h1>Welcome {user.username}</h1>

    <input type="submit" value="Log Out" onClick={logout}/>
  </div>
);

const Greeting = ({ user, logout }) => (
  user ? loggedIn(user, logout) : notLoggedIn()
);

export default Greeting;
