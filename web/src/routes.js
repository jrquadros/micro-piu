import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/" render={() => <RegisterPage />} />
      </Switch>
    </BrowserRouter>
  );
}
