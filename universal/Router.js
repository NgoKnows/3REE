import React, { Component, PropTypes } from 'react'

import { Router, browserHistory } from 'react-router'

import App from './containers/App'
import Wrapper from './containers/Wrapper'
import Routes from './Routes'

export default class MyRouter extends Component {
    render() {
        return (
            <Wrapper>
                <Router history={browserHistory}>
                    {Routes}
                </Router>
            </Wrapper>
        )
    }
}
