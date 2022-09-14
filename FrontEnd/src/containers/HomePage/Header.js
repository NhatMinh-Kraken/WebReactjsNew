import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss'
import logo from '../../assets/images/logo.png'

class Header extends Component {

    render() {

        return (
            <div className='home-header'>
                <div className='home-header-container'>
                    <div className='row'>
                        <div className='left-header'>
                            <div className='logo-header'>
                                <div className='logo-header-img'>
                                    <img src={logo} />
                                </div>
                            </div>
                            <div className='title-header'><h4>Mercedes-Benz</h4></div>
                        </div>
                        <div className='left-none-header'>
                            <div className='input-header'>
                                <div className='input-header-search'>
                                    <input className='form-control' type="text" tabIndex="-1" placeholder='Từ khóa tìm kiếm / OnlineCode từ công cụ chọn cấu hình xe' />
                                    <button type='button' className='btn btn-search fa fa-search' />
                                </div>
                            </div>
                        </div>
                        <div className='center-header'>
                            <div className='center-header-icon'>
                                <button type='button' className='button-con mx-1 '><i className='fab fa-facebook-f'></i></button>
                                <button type='button' className='button-con mx-1 '><i className='fab fa-google'></i></button>
                                <button type='button' className='button-con mx-1 '><i className='fab fa-twitter'></i></button>
                                <button type='button' className='button-con mx-1 '><i className='fab fa-github'></i></button>
                            </div>
                        </div>
                        <div className='right-header'>
                            <div className='right-header-login'>
                                <button type='button' className='button-login mx-1 '><i className="far fa-user"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
