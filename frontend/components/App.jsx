import React from "react";
import GreetingContainer from "./greeting/greeting_container.js";
import SessionFormContainer from "./session_form/session_form_container.js";
import ChatAreaContainer from "./chat_area/chat_area_container";

import ChannelFormContainer from "./channel/channel_form_container";
import MembershipFormContainer from "./membership/membership_form_container";
import { Route, HashRouter, Link, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util.jsx";
import SplashPage from "./splash_page";
import Modal from "./ui/modal";

const App = () => (
  <div className="app">
    <Modal />
    <AuthRoute path="/" component={GreetingContainer} />
    <Switch>
      <ProtectedRoute
        path="/home/channels/:channelId"
        component={ChatAreaContainer}
      />
      <ProtectedRoute
        path="/home/directThreads/:directThreadId"
        component={ChatAreaContainer}
      />

      <ProtectedRoute path="/home" component={ChatAreaContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </Switch>
    <AuthRoute exact path="/" exact component={SplashPage} />
  </div>
);

export default App;
