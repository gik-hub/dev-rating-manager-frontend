import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { Provider } from 'react-redux';
import configureStore from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './shared/Header';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import AuthPage from './AuthPage';
import singleEngineer from './singleEngineer';
import NotFoundPage from './shared/NotFound';
import '../styles/App.scss';


const store = configureStore();

// const App = () => {
//     return (<>
//         <Provider store={store}>
//             <Router>
//                 <Header />
//                 <Switch>
//                     <Route exact path="/" component={HomePage} />
//                     <Route path="/profile" component={ProfilePage} />
//                     <Route component={NotFoundPage} />
//                 </Switch>
//             </Router>

//         </Provider>
//     </>
//     )
// }

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
                {location.pathname == '/login' ? null : <Header />}
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/profile" component={ProfilePage} />
                    <Route path="/login" component={AuthPage} />
                    <Route path="/user/:id" component={singleEngineer} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Provider>
        );
    }
}

export default withRouter(App);