import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../../About";
import FormLogin from "../../Form";
import FormTable from "../../FormTable";
import Masuk from "../../Masuk";
import Navbar from "../../Navbar";
import Start from "../../Start";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/landing">
          <Start />
        </Route>
        <Route path="/admin">
          <FormLogin />
        </Route>
        <Route path="/table">
          <FormTable />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/masuk">
          <Masuk />
        </Route>
      </Switch>
    </Router>
  );
}
