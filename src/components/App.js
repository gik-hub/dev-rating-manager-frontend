import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Header from './shared/Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import AuthPage from './AuthPage';
import NotFoundPage from './shared/NotFound';
import EngineerList from './egineerList';
import '../styles/App.scss';

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
          { location.pathname == '/login' ? null : <Header /> }
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/login" component={AuthPage} />
            <Route path="/list" component={EngineerList} />
            <Route component={NotFoundPage} />
          </Switch>
        </Provider>
      );
    }
}

export default withRouter(App);
