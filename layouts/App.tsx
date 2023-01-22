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
// const CommunityDetail = loadable(() => import("@pages/CommunityDetail"));
const WritingCommunity = loadable(() => import("@pages/WritingCommunity"));
const WritingReview = loadable(() => import("@pages/WritingReview"));
const WritingRecruit = loadable(() => import("@pages/WritingRecruit"));
const Map = loadable(() => import("@pages/Map"));

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
      {/*<Route path="/communitydetail" component={CommunityDetail} />*/}
      {/*<Route path="/communitydetail/:id" component={CommunityDetail} />*/}
      <Route path="/writingcommunity" component={WritingCommunity} />
      <Route path="/writingreview" component={WritingReview} />
      <Route path="/writingrecruit" component={WritingRecruit} />
      <Route path="/map" component={Map} />
    </Switch>
  );
};

export default App;
