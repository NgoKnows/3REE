import { ADD_TODO } from './constants';

export function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo
    };
}

export function thunk() {
    return (dispatch, getState) => {
        // do stuff
    };
}
