import dataReducer, { initialState } from './reducer';
import * as types from './constants';
import * as actions from './actions';

describe('Data reducer', () => {
    it('Add task', () => {
        const action = {
            type: types.ADD_TASK,
            payload: {}
        };
        expect(dataReducer(initialState, action)).toEqual({
            ...initialState,
            list: [
                ...initialState.list,
                action.payload
            ]
        });
    });

    it('Check task', () => {
        const action = {
            type: types.CHECK_TASK,
            payload: {}
        };
        expect(dataReducer(initialState, action)).toEqual({
            ...initialState,
            list: [
                ...initialState.list,
                action.payload
            ]
        });
    });

    it('Check filter', () => {
        const action = {
            type: types.CHECK_FILTER,
            payload: true
        };
        expect(dataReducer(initialState, action)).toEqual({
            ...initialState,
            filter: action.payload
        });
    });
});

describe('Actions', () => {
    it('Add task', () => {
        const payload = {};
        expect(actions.addTask(payload)).toEqual({
            type: types.ADD_TASK,
            payload
        });
    });

    it('Check task', () => {
        const payload = {};
        expect(actions.checkTask(payload)).toEqual({
            type: types.CHECK_TASK,
            payload
        });
    });

    it('Check filter', () => {
        const payload = true;
        expect(actions.checkFilter(payload)).toEqual({
            type: types.CHECK_FILTER,
            payload
        });
    });
});
