import React from "react";
import { Redirect, Route, Switch } from "react-router";
import loadable from "@loadable/component";

const Main = loadable(() => import(`@layouts/Main`));
const SignUp = loadable(() => import("@pages/SignUp"));
const LogIn = loadable(() => import("@pages/LogIn"));
const Mypage = loadable(() => import("@pages/MyPage"));
const Schedule = loadable(() => import("@pages/Schedule"));
const CallCenter = loadable(() => import("@pages/CallCenter"));

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="main" />
      </Route>
      <Route path="/main" component={Main} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/mypage" component={Mypage} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/callcenter" component={CallCenter} />
    </Switch>
  );
};

export default App;
