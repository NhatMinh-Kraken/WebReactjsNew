import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import NavHomePage from './NavHomePage/NavHomePage';
import SliderHomePage from './Banner/SliderHomePage';

import Review from './Recommendations/Review/Review';
import Accessory from './ProductAccessory/Accessory';


class HomePage extends Component {

    render() {

        return (
            <div>
                <Header />
                <NavHomePage />
                <SliderHomePage />
                <Review />
                <Accessory />
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
