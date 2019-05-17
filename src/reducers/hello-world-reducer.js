import { ADD_COUNT, ADD_NAME } from '../constants';

const initialState = { count: 0, name: '' };

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUNT:
            return { ...state, count: action.count };
        case ADD_NAME:
            return { ...state, name: action.name };
        default:
            return state;
    }
};
