import React from 'react';
import { Route , Switch, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Header from './shared/Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import singleEngineer from './singleEngineer';
import NotFoundPage from './shared/NotFound';
import '../styles/App.scss';

const store = configureStore();
const App = () => {
    return (<>
    <Provider store={store}>
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/profile" component={ProfilePage}/>
                <Route path="/users/:id" component={singleEngineer}/>
                <Route component={NotFoundPage}/>
            </Switch>
            </Router>
    </Provider>
        </>
    )
}

export default App;
