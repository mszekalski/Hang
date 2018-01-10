import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import ChatFormContainer from './chat/chat_form_container.js';

import ChatIndex from './chat/chat_index_container.js';

import ChannelIndexContainer from './channel/channel_index_container';
import { Route, HashRouter, Link} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util.jsx";
import WelcomeContainer from "./welcome";
import SplashPage from "./splash_page";


const App = () => (
  <div>
    <Route path="/" component={GreetingContainer}/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/home/:channelId" exact component={ChatFormContainer} />
    <ProtectedRoute path="/home" exact component={ChannelIndexContainer} />

    <Route exact path="/" exact component={SplashPage} />




  </div>
);

export default App;
