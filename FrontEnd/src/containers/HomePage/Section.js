import React, { Component } from 'react';
import { connect } from 'react-redux';

class Section extends Component {

    render() {

        return (
            <section>
                
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Section);
