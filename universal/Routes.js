import React, { Component, PropTypes } from 'react'

import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Sample from './components/Sample'
import Blah from './components/Blah'

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Sample} />
        <Route path='blah' component={Blah} />
    </Route>
    );

