import { combineReducers } from 'redux';

import dataReducer from 'modules/data/reducer';

const createRootReducer = combineReducers({
    data: dataReducer
});

export default createRootReducer;
