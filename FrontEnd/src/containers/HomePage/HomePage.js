import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav } from 'reactstrap';
import Header from './Header';
import NavHomePage from './NavHomePage/NavHomePage';
import SliderHomePage from './SliderHomePage';


class HomePage extends Component {

    render() {

        return (
            <div>
                <Header />
                <NavHomePage />
                <SliderHomePage />
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
