import React from "react";
import GreetingContainer from "./greeting/greeting_container.js";
import SessionFormContainer from "./session_form/session_form_container.js";
import ChatArea from "./chat_area/chat_area";

import ChannelFormContainer from "./channel/channel_form_container";
import { Route, HashRouter, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util.jsx";
import SplashPage from "./splash_page";

const App = () => (
  <div className="app">
    <AuthRoute path="/" component={GreetingContainer} />
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
    <ProtectedRoute path="/home" component={ChatArea} />
    <Route exact path="/" exact component={SplashPage} />
  </div>
);

export default App;
