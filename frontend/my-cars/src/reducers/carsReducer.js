import {
    SEARCH_CARS_FETCH_SUCCESS,
} from '../actions/actionTypes';

const carsReducer = (state = [], action) => {
    switch (action.type) {
        case SEARCH_CARS_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

export default carsReducer;

export const getCars = state => state;
