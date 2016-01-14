import React, { Component, PropTypes } from 'react'

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';

import Reducer from 'flux/reducers/reducer'
import App from './App'

const finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

const store = finalCreateStore(Reducer);

export default class Root extends Component {
    render() {
        return (
                <Provider store={store}>
                    <App />
                </Provider>
        )
    }
}