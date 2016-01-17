import React, { Component, PropTypes } from 'react'

import { Provider } from 'react-redux'

import DevTools from './DevTools'

export default class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    {this.props.routes}
                    <DevTools />
                </div>
            </Provider>
        )
    }
}
