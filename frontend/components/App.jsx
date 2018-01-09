import React from 'react';
import GreetingContainer from './greeting/greeting_container.js';
import SessionFormContainer from './session_form/session_form_container.js';
import ChatFormContainer from './chat/chat_form_container.js';
import ChannelIndex from './channel/channel_index';
import { Route, HashRouter, Link} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../util/route_util.jsx";
import WelcomeContainer from "./welcome";
import SplashPage from "./splash_page";


const App = () => (
  <div>
    <AuthRoute path="/" component={GreetingContainer}/>
    <ProtectedRoute path="/home" component={WelcomeContainer}/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

    <AuthRoute path="/" exact component={SplashPage} />
    <ProtectedRoute path="/home" exact component={ChatFormContainer} />
    

  </div>
);

export default App;
