import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import { Route, HashRouter, Link} from 'react-router-dom';
import { AuthRoute } from "../util/route_util.jsx";

const App = () => (
  <div>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <GreetingContainer className="greeting-links"/>
  </div>
);

export default App;
