import React from "react";
import { Redirect, Route, Switch } from "react-router";
import loadable from "@loadable/component";

const Main = loadable(() => import(`@layouts/Main`));

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="main" />
      </Route>
      <Route path="/main" component={Main} />
    </Switch>
  );
};

export default App;
