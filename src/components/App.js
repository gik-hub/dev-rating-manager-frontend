import React from "react";
import { Route, Switch, withRouter, BrowserRouter as Router } from "react-router-dom";
import Header from "./shared/Header";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import NotFoundPage from "./shared/NotFound";
import RatingsPage from "./rate/RatingsPage";
import ManageRatingsPage from "./rate/ManageRatingsPage";
import { Provider } from "react-redux";
import "../styles/App.scss";
import configureStore from "../store";

const store = configureStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/ratings" exact component={RatingsPage} />
            <Route path="/ratings/rate/:engId" component={ManageRatingsPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default withRouter(App);