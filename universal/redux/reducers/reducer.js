import { ADD_TODO } from '../constants/constants'
import { routeReducer } from 'redux-simple-router'
import { combineReducers } from 'redux-immutablejs'

import Immutable from 'immutable'

//beginning state of app
let initialState = Immutable.Map({
    todos    : Immutable.List()
});

function app(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return state.update('todos', (val) => {
                return val.push(action.todo);
            });

        default:
            return state;
    }
}

const rootReducer = combineReducers({
    app,
    routing: routeReducer,
});

export default rootReducer;
