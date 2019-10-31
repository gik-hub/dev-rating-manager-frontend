import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { authUser } from '../actions/authAction';
import '../styles/authLogin.scss';
import loginLogo from '../assets/pulse_logo.svg';

class AuthPage extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        authUser: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
        toastManager: PropTypes.object.isRequired,
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

    componentDidUpdate() {
        if (this.props.auth.user.token) {
            localStorage.setItem('token', this.props.auth.user.token);
            this.props.history.push('/profile');
        } else {
            //TODO: log toast 
            // console.log(`error -> ${this.props.auth.errors.message}`);
        }
    }
    render() {
        return (
            <div style={{ backgroundColor: '#3e55c5', height: '100vh', width: '100vw' }}>
                <div className="login">
                    <div className="pulse-login">
                        <div className="logo">
                            <span>
                                <img src={loginLogo} alt="logo" style={{ width: '110px' }} ></img>
                            </span>
                        </div>
                        <div><h1>PULSE </h1>
                        </div>
                        <a className="btn-login" href="http://localhost:3000/api/v1/users/auth/google">
                            <span className="icon"></span>
                            <span className="login-text">Sign in to get started</span>
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
