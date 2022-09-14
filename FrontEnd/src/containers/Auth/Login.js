import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';

import { HandleLoginApi } from '../../services/userService';
import { userLoginSussess, userCustomerLoginSussess } from '../../store/actions';

// import axios from 'axios';


class Login extends Component {


    componentDidMount() {

    }

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isBool: false,
            errMessage: '',
        }
    }

    HandleOnChangeInputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    HandleOnChangeInputPass = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    HandleLogin = async () => {
        this.setState({
            errMessage: '',
        })
        try {
            let data = await HandleLoginApi(this.state.email, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                { this.props.userLoginSussess(data.user) }
            }
            if(data && data.errCode === 6)
            {
                { this.props.userCustomerLoginSussess(data.user) }
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    })
                }
            }
        }
    }

    HandleShowEyePassword = () => {
        this.setState({
            isBool: !this.state.isBool
        })

    }

    render() {
        return (
            <div className='login-background' >
                <div className='login-container'>
                    <div className='login-content'>
                        <div className='login-background-1'>
                            <div className='login-background-header'>
                                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                    <li className="nav-item mr-2" role="presentation">
                                        <a className="nav-link active" id="tab-login" data-toggle="pill" href="#pills-login" role="tab"
                                            aria-controls="pills-login" aria-selected="true">Login</a>
                                    </li>
                                    <li className="nav-item ml-2" role="presentation">
                                        <a className="nav-link" id="tab-register" data-toggle="pill" href="#pills-register" role="tab"
                                            aria-controls="pills-register" aria-selected="false">Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                    {/* <form> */}
                                    <div className="text-center mb-3 mt-3 mb-3">

                                        <button type="button" className="btn btn-link btn-floating mx-1 ">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1 ">
                                            <i className="fab fa-google"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1 ">
                                            <i className="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" className="btn btn-link btn-floating mx-1 ">
                                            <i className="fab fa-github"></i>
                                        </button>
                                    </div>


                                    <div className='' style={{ color: 'red', marginBottom: '7px' }}>
                                        {this.state.errMessage}
                                    </div>

                                    <div className="user-box mb-4">
                                        <input type="text" id="loginName" className="form-controll" name='email' defaultValue={this.state.email} onChange={(event) => this.HandleOnChangeInputEmail(event)} required />
                                        <label className="form-labell" htmlFor="loginName">Email or username</label>
                                    </div>


                                    <div className="user-box mb-4">
                                        <input type={this.state.isBool ? 'text' : 'password'} id="loginPassword" className="form-controll" name='password' defaultValue={this.state.password} onChange={(event) => this.HandleOnChangeInputPass(event)} required />
                                        <span className='show-btn' onClick={() => { this.HandleShowEyePassword() }}><i className={this.state.isBool ? 'fa fa-eye' : 'fa fa-eye-slash'}></i></span>
                                        <label className="form-labell" htmlFor="loginPassword">Password</label>
                                    </div>


                                    <div className="row mb-4">
                                        <div className="col-6 justify-content-center d-flex">
                                            <div className="form-check mb-3 mb-md-0">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="loginCheck" />
                                                <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                            </div>
                                        </div>
                                        <div className="col-6 justify-content-center d-flex">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>

                                    <div className='col-12 d-flex justify-content-center'>
                                        <button className="btn btn-danger btn-block mb-4 col-4 " onClick={() => { this.HandleLogin() }}>Sign in</button>
                                    </div>

                                    <div className="text-center">
                                        <p>Not a member? <a href="#!">Register</a></p>
                                    </div>
                                    {/* </form> */}
                                </div>
                                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                    <form>
                                        <div className="text-center mb-3 mt-3 mb-3">

                                            <button type="button" className="btn btn-link btn-floating mx-1 ">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1 ">
                                                <i className="fab fa-google"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1 ">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" className="btn btn-link btn-floating mx-1 ">
                                                <i className="fab fa-github"></i>
                                            </button>
                                        </div>

                                        <div className="user-box mb-4">
                                            <input type="text" id="registerName" className="form-controlls" name='Name' />
                                            <label className="form-labells" htmlFor="registerName">Name</label>
                                        </div>

                                        <div className="user-box mb-4">
                                            <input type="text" id="registerUsername" className="form-controlls" name='Username' />
                                            <label className="form-labells" htmlFor="registerUsername">Username</label>
                                        </div>

                                        <div className="user-box mb-4">
                                            <input type="text" id="registerEmail" className="form-controlls" name='Email' />
                                            <label className="form-labells" htmlFor="registerEmail">Email</label>
                                        </div>

                                        <div className="user-box mb-4">
                                            <input type="password" id="registerPassword" className="form-controlls" name='Password' />
                                            <label className="form-labells" htmlFor="registerPassword">Password</label>
                                        </div>

                                        <div className="user-box mb-4">
                                            <input type="password" id="registerRepeatPassword" className="form-controlls" name='RepeatPassword' />
                                            <label className="form-labells" htmlFor="registerRepeatPassword">Repeat password</label>
                                        </div>
                                        <div className='col-12 d-flex justify-content-center'>
                                            <button className="btn btn-danger btn-block mb-3 col-4">Sign in</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        userLoginSussess: (userInfo) => dispatch(actions.userLoginSussess(userInfo)),
        userCustomerLoginSussess: (customerUser) => dispatch(actions.userCustomerLoginSussess(customerUser))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
