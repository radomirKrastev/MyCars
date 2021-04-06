import {
    SEARCH_CARS_FETCH_SUCCESS,
    UPDATE_CAR_FETCH_SUCCESS,
    DELETE_CAR_SUCCESS,
} from '../actions/actionTypes';

const carsReducer = (state = [], action) => {
    console.log('red')
    switch (action.type) {
        case DELETE_CAR_SUCCESS:
            const filteredState = state.filter(x => x._id != action.payload);
            return filteredState;
        case SEARCH_CARS_FETCH_SUCCESS:
            return action.payload;
        case UPDATE_CAR_FETCH_SUCCESS:
            const updatedState = state.map(x => {
                if (x._id == action.payload._id) {
                    return { ...x, ...action.payload };
                }

                return x;
            });

            return updatedState;
        default:
            return state;
    }
}

export default carsReducer;

export const getCars = state => state;
