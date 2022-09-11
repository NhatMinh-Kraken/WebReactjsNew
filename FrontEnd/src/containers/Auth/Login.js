import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';

import { HandleLoginApi } from '../../services/userService';
import { userLoginSussess } from '../../store/actions';

// import axios from 'axios';


class Login extends Component {


    // componentDidMount() {
    //     axios.post('http://localhost:8080').then(res => {
    //         console.log('Kết nối thành công 8080');
    //     })
    // }

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
                                <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                                    <li class="nav-item mr-2" role="presentation">
                                        <a class="nav-link active" id="tab-login" data-toggle="pill" href="#pills-login" role="tab"
                                            aria-controls="pills-login" aria-selected="true">Login</a>
                                    </li>
                                    <li class="nav-item ml-2" role="presentation">
                                        <a class="nav-link" id="tab-register" data-toggle="pill" href="#pills-register" role="tab"
                                            aria-controls="pills-register" aria-selected="false">Register</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                                    {/* <form> */}
                                    <div class="text-center mb-3 mt-3 mb-3">

                                        <button type="button" class="btn btn-link btn-floating mx-1 ">
                                            <i class="fab fa-facebook-f"></i>
                                        </button>

                                        <button type="button" class="btn btn-link btn-floating mx-1 ">
                                            <i class="fab fa-google"></i>
                                        </button>

                                        <button type="button" class="btn btn-link btn-floating mx-1 ">
                                            <i class="fab fa-twitter"></i>
                                        </button>

                                        <button type="button" class="btn btn-link btn-floating mx-1 ">
                                            <i class="fab fa-github"></i>
                                        </button>
                                    </div>


                                    <div className='' style={{ color: 'red', marginBottom: '7px' }}>
                                        {this.state.errMessage}
                                    </div>

                                    <div class="user-box mb-4">
                                        <input type="text" id="loginName" class="form-controll" name='email' value={this.state.email} onChange={(event) => this.HandleOnChangeInputEmail(event)} required />
                                        <label class="form-labell" for="loginName">Email or username</label>
                                    </div>


                                    <div class="user-box mb-4">
                                        <input type={this.state.isBool ? 'text' : 'password'} id="loginPassword" class="form-controll" name='password' value={this.state.password} onChange={(event) => this.HandleOnChangeInputPass(event)} required />
                                        <span className='show-btn' onClick={() => { this.HandleShowEyePassword() }}><i class={this.state.isBool ? 'fa fa-eye' : 'fa fa-eye-slash'}></i></span>
                                        <label class="form-labell" for="loginPassword">Password</label>
                                    </div>


                                    <div class="row mb-4">
                                        <div class="col-6 justify-content-center d-flex">
                                            <div class="form-check mb-3 mb-md-0">
                                                <input class="form-check-input" type="checkbox" value="" id="loginCheck" />
                                                <label class="form-check-label" for="loginCheck"> Remember me </label>
                                            </div>
                                        </div>
                                        <div class="col-6 justify-content-center d-flex">
                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>

                                    <div className='col-12 d-flex justify-content-center'>
                                        <button class="btn btn-danger btn-block mb-4 col-4 " onClick={() => { this.HandleLogin() }}>Sign in</button>
                                    </div>

                                    <div class="text-center">
                                        <p>Not a member? <a href="#!">Register</a></p>
                                    </div>
                                    {/* </form> */}
                                </div>
                                <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                    <form>
                                        <div class="text-center mb-3 mt-3 mb-3">

                                            <button type="button" class="btn btn-link btn-floating mx-1 ">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1 ">
                                                <i class="fab fa-google"></i>
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1 ">
                                                <i class="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1 ">
                                                <i class="fab fa-github"></i>
                                            </button>
                                        </div>

                                        <div class="user-box mb-4">
                                            <input type="text" id="registerName" class="form-controlls" name='Name' />
                                            <label class="form-labells" for="registerName">Name</label>
                                        </div>

                                        <div class="user-box mb-4">
                                            <input type="text" id="registerUsername" class="form-controlls" name='Username' />
                                            <label class="form-labells" for="registerUsername">Username</label>
                                        </div>

                                        <div class="user-box mb-4">
                                            <input type="text" id="registerEmail" class="form-controlls" name='Email' />
                                            <label class="form-labells" for="registerEmail">Email</label>
                                        </div>

                                        <div class="user-box mb-4">
                                            <input type="password" id="registerPassword" class="form-controlls" name='Password' />
                                            <label class="form-labells" for="registerPassword">Password</label>
                                        </div>

                                        <div class="user-box mb-4">
                                            <input type="password" id="registerRepeatPassword" class="form-controlls" name='RepeatPassword' />
                                            <label class="form-labells" for="registerRepeatPassword">Repeat password</label>
                                        </div>
                                        <div className='col-12 d-flex justify-content-center'>
                                            <button class="btn btn-danger btn-block mb-3 col-4">Sign in</button>
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
        userLoginSussess: (userInfo) => dispatch(actions.userLoginSussess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
