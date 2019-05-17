import { ADD_COUNT, ADD_NAME } from '../constants';

const addCount = count => ({
    type: ADD_COUNT,
    count
});

export const addName = name => ({
    type: ADD_NAME,
    name
});

export const countIncrement = prevCount => dispatch => dispatch(addCount(prevCount + 1));
