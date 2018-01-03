import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import { Route, HashRouter, Link} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Hang</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
