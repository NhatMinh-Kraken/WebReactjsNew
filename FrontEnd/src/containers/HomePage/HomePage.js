import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import NavHomePage from './NavHomePage/NavHomePage';
import SliderHomePage from './SliderHomePage';

import Review from './Recommendations/Review/Review';


class HomePage extends Component {

    render() {

        return (
            <div>
                <Header />
                <NavHomePage />
                <SliderHomePage />
                <Review />
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
