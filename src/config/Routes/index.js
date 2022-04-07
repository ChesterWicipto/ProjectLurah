import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../../About";
import FormLogin from "../../Form";
import FormTable from "../../FormTable";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <FormLogin />
        </Route>
        <Route path="/">
          <FormTable />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}
