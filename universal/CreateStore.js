import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable'

import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'redux-simple-router'

import DevTools from './containers/DevTools'
import Reducer from './redux/reducers/reducer'

import { isClient } from './utils.js'

export default function composeStore() {

    //if browser, then grab initial state from global var
    const initialState = isClient ? window.__INITIAL_STATE__ : false;

    //always use thunk middleware
    let middleware = [applyMiddleware(thunk)];

    const reduxRouterMiddleware = syncHistory(browserHistory)
    //add necessary middlewares
    if (isClient) {
        //router middleware only on client
        middleware.push(applyMiddleware(reduxRouterMiddleware));
    }
    if (process.env.NODE_ENV !== 'production') {
        //devtools only in development
        middleware.push(DevTools.instrument());
    }

    const finalCreateStore = compose(...middleware)(createStore);

    //hydrate store with initialState if on client
    let store;
    if (isClient) {
        store = finalCreateStore(Reducer, Immutable.fromJS(initialState));
    } else {
        store = finalCreateStore(Reducer);
    }
    //allow replay of routing
    reduxRouterMiddleware.listenForReplays(store, (state) => state.get('routing'));

    return store;
}
