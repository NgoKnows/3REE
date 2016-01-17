import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable'

import { browserHistory, createMemoryHistory } from 'react-router'
import { syncHistory, routeReducer } from 'redux-simple-router'

import DevTools from './containers/DevTools'
import Reducer from './redux/reducers/reducer'

import { isClient, isDevelopment } from './utils.js'

export default function composeStore(url) {

    //always use thunk middleware
    let middleware = [applyMiddleware(thunk)];

    let reduxRouterMiddleware;
    if (isClient) {
        reduxRouterMiddleware = syncHistory(browserHistory);
    } else {
        reduxRouterMiddleware = syncHistory(createMemoryHistory([url]));
    }

    middleware.push(applyMiddleware(reduxRouterMiddleware));

    //devtools only in development
    if (isDevelopment) {
        middleware.push(DevTools.instrument());
    }

    const finalCreateStore = compose(...middleware)(createStore);

    //hydrate store with initialState if on client
    let store;
    if (isClient) {
        store = finalCreateStore(Reducer, Immutable.fromJS(window.__INITIAL_STATE__));
    } else {
        store = finalCreateStore(Reducer);
    }

    //allow replay of routing
    reduxRouterMiddleware.listenForReplays(store, (state) => state.get('routing'));

    return store;
}
