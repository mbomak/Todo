import * as types from './constants';

export function addTask(payload) {
    return {
        type: types.ADD_TASK,
        payload
    };
}

export function checkTask(payload) {
    return {
        type: types.CHECK_TASK,
        payload
    };
}

export function checkFilter(payload) {
    return {
        type: types.CHECK_FILTER,
        payload
    };
}
