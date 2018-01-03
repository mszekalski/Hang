import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import { Route, HashRouter, Link} from 'react-router-dom';
import { AuthRoute } from "../util/route_util.jsx";

const App = () => (
  <div>
    <header>
      <h1>Hang</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
