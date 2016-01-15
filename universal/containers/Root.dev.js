import React, { Component, PropTypes } from 'react'

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';

import { createDevTools } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'>
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

import Reducer from 'flux/reducers/reducer'
import App from './App'

const finalCreateStore = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
)(createStore);

const store = finalCreateStore(Reducer);

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <App />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}