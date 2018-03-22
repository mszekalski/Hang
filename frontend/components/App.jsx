import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import ChatFormContainer from './chat_form/chat_form_container.js';
import ChatIndexContainer from './chat_index/chat_index_container.js';
import ChatHeaderContainer from './chat_header/chat_header_container.js';

import SidebarContainer from './sidebar/sidebar_container';
import ChannelFormContainer from './channel/channel_form_container';
import { Route, HashRouter, Link} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util.jsx";
import SplashPage from "./splash_page";


const App = () => (
  <div>
    <AuthRoute path="/" component={GreetingContainer}/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/home/:channelId" exact component={ChatFormContainer} />
    <ProtectedRoute path="/home/:channelId" exact component={ChatIndexContainer} />
    <ProtectedRoute path="/home/:channelId" exact component={ChatHeaderContainer} />
    <ProtectedRoute path="/home" component={SidebarContainer} />
    <Route exact path="/" exact component={SplashPage} />




  </div>
);

export default App;
