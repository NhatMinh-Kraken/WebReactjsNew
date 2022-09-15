import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Nav.scss'


class NavHomePage extends Component {

    render() {

        return (
            <nav>
                <div></div>
            </nav>

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
