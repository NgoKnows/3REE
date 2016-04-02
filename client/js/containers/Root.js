import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { isDevelopment } from '../utils';

import DevTools from 'containers/DevTools';
import App from 'containers/App';

export default class Root extends Component {
    render() {
        const store = this.props.store;
        const history = syncHistoryWithStore(browserHistory, store,
            { selectLocationState: (state) => state.get('routing') });

        return (
            <Provider store={store} >
                <div>
                    <Router history={history}>
                        <Route path="/" component={App}>

                        </Route>
                    </Router>
                    { isDevelopment ? <DevTools /> : null }
                </div>
            </Provider>
        );
    }
}
