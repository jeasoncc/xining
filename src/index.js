import React from "react";
import ReactDOM from "react-dom";
import {HashRouter, BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";
import AuthLayout from "layouts/Auth.jsx";
import Shopping from "layouts/Shopping";
import  appState from "store/store";
ReactDOM.render(
  <HashRouter >
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/shopping" render={props => <Shopping appState={appState} {...props}  />} />
      <Redirect from="/" to="/auth/login" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
