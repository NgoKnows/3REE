import React, { Component, PropTypes } from 'react'

import { Provider } from 'react-redux'

export default class Root extends Component {
    render() {
        return (
                <Provider store={this.props.store}>
                    {this.props.routes}
                </Provider>
        )
    }
}