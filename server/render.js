import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import myApp from '../universal/redux/reducers/reducer'
import Root from '../universal/containers/Root'
import composeStore from '../universal/CreateStore'
import routes from '../universal/Routes'
import Wrapper from '../universal/containers/Wrapper'

import { Router, match, RouterContext, createRoutes, browserHistory } from 'react-router';

export function *handleRender() {
    // Create a new Redux store instance
    const store = composeStore(this.url);

    // Grab the initial state from our Redux store
    const initialState = store.getState()

    match({ routes: [routes], location: this.url }, (error, redirectLocation, renderProps) => {
        if (error) {
            this.body = error.message

        } else if (redirectLocation) {
            this.body = "Would Redirect to " + redirectLocation.pathname

        } else if (renderProps) {
            const radiumConfig = {userAgent: this.headers['user-agent']};
            const Router = (
                <Wrapper radiumConfig={radiumConfig}>
                    <RouterContext {...renderProps} />
                </Wrapper>
            );
            const html = renderToString(
                <Root store={store} routes={Router} />
            );
            this.body = renderFullPage(html, initialState)

        } else {
            this.body = "Not Found"
        }
    })
};

export function renderFullPage(html, initialState) {
    return `
   <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Sample App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
    `
};
