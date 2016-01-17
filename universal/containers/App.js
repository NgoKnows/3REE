import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../redux/actions/actions'
import Sample from '../components/Sample'

class App extends Component {
    render() {
        const { actions, ...other } = this.props;

        return (
            <div style={STYLES}>
                {this.props.children}
                <div onClick={() => actions.push('/blah')}>blah</div>
            </div>
        );
    }
}

App.propTypes = {}

function mapStateToProps(state) {
    return {
        blah : state.get('blah')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch)
    };
}

const STYLES = {}

export default connect(mapStateToProps, mapDispatchToProps)(App);
