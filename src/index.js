/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import Success from "views/examples/Success";

export const User = createContext({ user: null, setUser: () => {}})

function UserContext(props) {
  const login = data => localStorage.setItem('token', data)
  const logout = () => localStorage.removeItem('token')

  return <User.Provider value={{ login, logout}} {...props}/>
}

ReactDOM.render(
  <UserContext >
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/success" component={Success} />
        <Redirect from="/" to="/admin/index" />
      </Switch>
    </BrowserRouter>
  </UserContext>,
  document.getElementById("root")
);
