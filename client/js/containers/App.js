import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerActions } from 'react-router-redux';

class App extends Component {
    render() {
        const {} = this.props;

        return (<div>HIIII!!!</div>);
    }
}

const STYLES = {};

App.propTypes = {};

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        //actions : bindActionCreators({dispatchAction}, dispatch),
        //routerActions : bindActionCreators(routerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
