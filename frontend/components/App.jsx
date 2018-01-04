import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import { Route, HashRouter, Link} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util.jsx";
import WelcomeContainer from "./welcome";

const App = () => (
  <div>

    <AuthRoute path="/" component={GreetingContainer}/>
    <ProtectedRoute path="/" component={WelcomeContainer}/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
