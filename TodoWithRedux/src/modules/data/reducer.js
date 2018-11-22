import * as types from './constants';

export const initialState = {
    list: [],
    filter: false
};

function dataReducer(state = initialState, { type, payload }) {
    switch (type) {
    // ListItem of repositories
    case types.ADD_TASK:
        return {
            ...state,
            list: [
                ...state.list,
                payload
            ]
        };

    case types.CHECK_TASK:
        return {
            ...state,
            list: [
                ...state.list.filter(el => el.id !== payload.id),
                payload
            ]
        };

    case types.CHECK_FILTER:
        return {
            ...state,
            filter: payload
        };

    default:
        return state;
    }
}

export default dataReducer;
