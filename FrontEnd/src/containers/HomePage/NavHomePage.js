import React, { Component } from 'react';
import { connect } from 'react-redux';
import './NavHomePage.scss'


class NavHomePage extends Component {

    render() {

        return (
            <div className='NavHomePage'>
                <div className='NavHomePage-Body'>
                    <div className='NavHomePage-Item-Car'>
                        <button className='NavHomePage-Item-Button'>
                            <div className='NavHomePage-Item-Icon'>
                                <i className="fa fa-car" aria-hidden="true"></i>
                            </div>
                            <div className='NavHomePage-Item'>
                                Các dòng xe
                            </div>
                        </button>
                    </div>
                    <div className='NavHomePage-Item-BuyOnl'>
                        <button className='NavHomePage-Item-Button'> 
                            <div className='NavHomePage-Item'>
                                Mua trực tiếp
                            </div>
                        </button>
                    </div>
                    <div className='NavHomePage-Item-Consultant'>
                        <button className='NavHomePage-Item-Button'>
                            <div className='NavHomePage-Item'>
                                Tư vấn mua xe
                            </div>
                        </button>
                    </div>
                    <div className='NavHomePage-Item-Service'>
                        <button className='NavHomePage-Item-Button'>
                            <div className='NavHomePage-Item'>
                                Dịch vụ
                            </div>
                        </button>
                    </div>
                    <div className='NavHomePage-Item-World-Car'>
                        <button className='NavHomePage-Item-Button'>
                            <div className='NavHomePage-Item'>
                                Thế giới Mercedes
                            </div>
                        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavHomePage);
