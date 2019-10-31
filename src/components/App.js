import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { Provider } from 'react-redux';
import configureStore from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import '../styles/App.scss';
import Header from './shared/Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import AuthPage from './AuthPage';
import NotFoundPage from './shared/NotFound';
import RatingsPage from './rate/RatingsPage';
import RateForm from './rate/RateForm';

const App = () => {
    return (<>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" component={AuthPage} />
            <Route path="/profile" component={ProfilePage}/>
            {/* <Route path="/rate" component={RateForm}/> */}
            <Route path='/ratings/rate/:engId' component={ RateForm } />
            <Route path='/ratings/rate' component={ RatingsPage } />
            <Route component={NotFoundPage}/>
        </Switch>
        </>
    )
}

export default withRouter(App);