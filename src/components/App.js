/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from '../store';
import Header from './shared/Header';
import HomePage from './HomePage';
import singleEngineer from './singleEngineer';
import ManageRatingsPage from './rate/ManageRatingsPage';
import AddLf from './AddLf';
import NotFoundPage from './shared/NotFound';
import '../styles/App.scss';
import '../styles/authLogin.scss';
import PrivateRoute from './PrivateRoute';
import EngineerList from './egineerList';
import AuthPage from './AuthPage';

const store = configureStore();

class App extends Component {
    static propTypes = {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired,
    };

    constructor(props) {
      super(props);
    }

    render() {
      const { location } = this.props;
      return (
        <Provider store={store}>
          <ToastContainer />
          {location.pathname === '/login' ? null : <Header />}
          <Switch>
            <Route exact path="/" component={AuthPage}>
              <Redirect to="/login" />
            </Route>
            <Route path="/login" component={AuthPage} />
            <Route path="/add-lf" component={AddLf} />
            <PrivateRoute path="/profile" component={HomePage} />
            <Route path="/users/:id" component={singleEngineer} />
            <PrivateRoute path="/ratings/rate/:engId" component={ManageRatingsPage} />
            <PrivateRoute exact path="/list" component={EngineerList} />
            <Route component={NotFoundPage} />
          </Switch>
        </Provider>
      );
    }
}

export default withRouter(App);
