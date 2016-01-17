import { ADD_TODO } from '../constants/constants'
import { routeActions } from 'redux-simple-router'

import Immutable from 'immutable'

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        rover
    }
}

export function thunk(blah) {
    return (dispatch, getState) => {
        //do stuff
    }
}

// Router
// --------------------------------------------------
export const { push, replace, go, goForward, goBack } = routeActions
