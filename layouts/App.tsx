import React from "react";
import { Redirect, Route, Switch } from "react-router";
import loadable from "@loadable/component";

const Main = loadable(() => import(`@layouts/Main`));
const SignUp = loadable(() => import("@pages/SignUp"));
const LogIn = loadable(() => import("@pages/LogIn"));
const Mypage = loadable(() => import("@pages/MyPage"));
const Schedule = loadable(() => import("@pages/Schedule"));
const CallCenter = loadable(() => import("@pages/CallCenter"));
const Search = loadable(() => import("@pages/Search"));
const Community = loadable(() => import("@pages/Community"));
const Page1 = loadable(() => import("@pages/page1"));
const Page2 = loadable(() => import("@pages/Page2"));
const Page3 = loadable(() => import("@pages/Page3"));

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
      <Route path="/search" component={Search} />
      <Route path="/community" component={Community} />
      <Route path="/page1" component={Page1} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </Switch>
  );
};

export default App;
