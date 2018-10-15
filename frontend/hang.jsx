import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store.js";
import Root from "./components/root";
import * as channelActions from "./actions/channel_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.user) {
    const preloadedState = { session: { currentUser: window.user } };
    store = configureStore(preloadedState);
    delete window.user;
  } else {
    store = configureStore();
  }
  // window.createChannel = channelActions.createChannel;
  // window.fetchChannel = channelActions.fetchChannel;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});
