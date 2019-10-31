import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import { connect } from 'react-redux';

import { authUser } from '../actions/authAction';
import '../styles/authLogin.scss';
import loginLogo from '../assets/pulse_logo.svg';

export class AuthPage extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        authUser: PropTypes.func.isRequired,
        auth: PropTypes.object,
    };

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { location } = this.props;
        const base64encoded = location.search.split('&')[0].split('?code=')[1];
        if (base64encoded) {
            const decoded = JSON.parse(atob(base64encoded));
            this.props.authUser(decoded);
        }
    }

    componentWillReceiveProps(nextProps) {
        const { auth, history } = nextProps;
        if (auth.user.token) {
            localStorage.setItem('pulseToken', auth.user.token);
            history.push('/profile');
        } else {
            //TODO: log toast 
            // console.log(`error -> ${this.props.auth.errors.message}`);
        }
    }
    render() {
        return (
            <div className="authPage">
                <div className="login">
                    <div className="pulse-login">
                        <div className="logo">
                            <span>
                                <img src={loginLogo} alt="logo" style={{ width: '110px' }} ></img>
                            </span>
                        </div>
                        <div className="pulse-title">
                        <h1>PULSE 
                        </h1>
                        </div>
                        <a className="btn-login" href="http://dev-rating-manager-staging.herokuapp.com/api/v1/users/auth/google">
                            <span className="icon"></span>
                            <span className="login-txt">Sign in to get started</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) => ({ authUser: (data) => dispatch(authUser(data)) });

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(AuthPage);
