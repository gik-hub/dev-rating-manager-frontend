import React from 'react';
import { Route , Switch } from 'react-router-dom';
import Header from './shared/Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import NotFoundPage from './shared/NotFound';
import '../styles/App.scss';

const App = () => {
    return (<>
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/profile" component={ProfilePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
        </>
    )
}

export default App;
