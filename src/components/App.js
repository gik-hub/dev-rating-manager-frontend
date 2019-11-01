<<<<<<< HEAD
/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from '../store';
import Header from './shared/Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
=======
import React from "react";
import { Route, Switch, withRouter, BrowserRouter as Router } from "react-router-dom";
import Header from "./shared/Header";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import NotFoundPage from "./shared/NotFound";
import singleEngineer from './singleEngineer';
import RatingsPage from "./rate/RatingsPage";
import ManageRatingsPage from "./rate/ManageRatingsPage";
import { Provider } from "react-redux";
import "../styles/App.scss";
import configureStore from "../store";
>>>>>>> ft(view-single-user)get single user:
import AuthPage from './AuthPage';
import AddLf from './AddLf';
import RatingsPage from './rate/RatingsPage';
import RateForm from './rate/RateForm';
import NotFoundPage from './shared/NotFound';
import '../styles/App.scss';


const store = configureStore();


class App extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }
    render() {
        const { location } = this.props;
        return (
            <Provider store={store}>
                <ToastContainer />
                {location.pathname == '/login' ? null : <Header />}
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/login" component={AuthPage} />
                    <Route path="/add-lf" component={AddLf}/>

            <Route path='/ratings/rate/:engId' component={ RateForm } />
            <Route path='/ratings/rate' component={ RatingsPage } />
                    <Route component={NotFoundPage} />
                </Switch>
            </Provider>
        );
    }
}

export default withRouter(App);