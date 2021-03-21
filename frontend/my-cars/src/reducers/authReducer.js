import {
    LOGIN_FETCH_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
    accessToken: '',
    username: '',
    _id: '',
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_FETCH_SUCCESS:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}

export default authReducer;

export const isAuthenticated = state => Boolean(state.accessToken);
export const getAccessToken = state => state.accessToken;
export const getUserId = state => state._id;
