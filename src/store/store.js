import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './reducer-index';

const initialState = {};
export const createNewStore = (state = initialState) => createStore(
    combineReducers(reducers),
    state,
    applyMiddleware(thunk)
);

let store;
export const getStore = () => store || (store = exports.createNewStore());
