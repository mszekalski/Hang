import React from 'react';
import { Link } from 'react-router-dom';


const notLoggedIn = () => (
  <div>
    <Link to={"/login"}>Sign In</Link>
    <br></br>
    <Link to={"/signup"}>Sign Up</Link>
  </div>
);

const loggedIn = (currentUser, logout) => (
  <div>
    <h1>Welcome ${currentUser.username}</h1>
    <button onClick={logout}/>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? loggedIn(currentUser, logout) : notLoggedIn()
);

export default Greeting;
