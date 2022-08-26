import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TkEmail:'',
            TkPass:'',
            isBool: false,
        }
    }

    HandleOnChangeInput = (event) =>{
        this.setState({
            TkEmail: event.target.value,
            TkPass: event.target.value
        })
    }

    HandleLogin = () => {
        console.log('TkEmail: '+this.state.TkEmail);
        console.log('TkPass: '+this.state.TkPass);
    }

    HandleShowEyePassword = () => {
        this.setState({
            isBool: !this.state.isBool
        })
        
    }

    render() {
        return (
            <div className='login-background'>
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
                                    <form>
                                        <div class="text-center mb-3">
                                            <p>Sign in with:</p>
                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <i class="fab fa-google"></i>
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <i class="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <i class="fab fa-github"></i>
                                            </button>
                                        </div>

                                        <p class="text-center">or:</p>


                                        <div class="user-box mb-4">
                                            <input type="text" id="loginName" class="form-controll" name='TkEmail' onChange={(event) => this.HandleOnChangeInput(event)} required/>
                                            <label class="form-labell" for="loginName">Email or username</label>
                                        </div>


                                        <div class="user-box mb-4">
                                            <input type={this.state.isBool ? 'text' : 'password'} id="loginPassword" class="form-controll" name='TkPass' onChange={(event) => this.HandleOnChangeInput(event)} required/>
                                            <span className='show-btn' onClick={() => {this.HandleShowEyePassword()}}><i class={this.state.isBool ? 'fa fa-eye' : 'fa fa-eye-slash'}></i></span>
                                            <label class="form-labell" for="loginPassword">Password</label>
                                        </div>  
            

                                        <div class="row mb-4">
                                            <div class="col-md-6 d-flex justify-content-center">

                                                <div class="form-check mb-3 mb-md-0">
                                                    <input class="form-check-input" type="checkbox" value="" id="loginCheck"  />
                                                    <label class="form-check-label" for="loginCheck"> Remember me </label>
                                                </div>
                                            </div>

                                            <div class="col-md-6 d-flex justify-content-center">

                                                <a href="#!">Forgot password?</a>
                                            </div>
                                        </div>


                                        <button type="submit" class="btn btn-primary btn-block mb-4" onClick={() => {this.HandleLogin()}}>Sign in</button>


                                        <div class="text-center">
                                            <p>Not a member? <a href="#!">Register</a></p>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                                    <form>
                                        <div class="text-center mb-3">
                                            <p>Sign up with:</p>
                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <i class="fab fa-facebook-f"></i>
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <i class="fab fa-google"></i>
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <i class="fab fa-twitter"></i>
                                            </button>

                                            <button type="button" class="btn btn-link btn-floating mx-1">
                                                <i class="fab fa-github"></i>
                                            </button>
                                        </div>

                                        <p class="text-center">or:</p>


                                        <div class="user-box mb-4">
                                            <input type="text" id="registerName" class="form-controll" name='Name' />
                                            <label class="form-labell" for="registerName">Name</label>
                                        </div>


                                        <div class="user-box mb-4">
                                            <input type="text" id="registerUsername" class="form-controll" name='Username'/>
                                            <label class="form-labell" for="registerUsername">Username</label>
                                        </div>


                                        <div class="user-box mb-4">
                                            <input type="text" id="registerEmail" class="form-controll" name='Email'/>
                                            <label class="form-labell" for="registerEmail">Email</label>
                                        </div>


                                        <div class="user-box mb-4">
                                            <input type="password" id="registerPassword" class="form-controll" name='Password'/>
                                            <label class="form-labell" for="registerPassword">Password</label>
                                        </div>


                                        <div class="user-box mb-4">
                                            <input type="password" id="registerRepeatPassword" class="form-controll" name='RepeatPassword'/>
                                            <label class="form-labell" for="registerRepeatPassword">Repeat password</label>
                                        </div>

                                        


                                        <button type="submit" class="btn btn-primary btn-block mb-3">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
