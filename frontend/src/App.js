import React from "react";

import '../src/assets/Seed.css';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import {HomePage, DashboardPage} from '../src/pages/index.js';


const App = () => {
  return (
    <React.Fragment>
      <div className="w-100 h-100vh of-x-hidden of-y-hidden c-p-1 h-pr-fl-ma c-p-2">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact={true} path="/Dashboard" component={DashboardPage} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter></div>
    </React.Fragment>
  );
};

export default App;

