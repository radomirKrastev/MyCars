import userService from '../services/userService';
import { push } from 'connected-react-router';

import {
    UPLOAD_CAR_AD_FETCH_SUCCESS
} from './actionTypes';

const fetchUserUploadCarAdSuccess = (userData) => ({
    type: UPLOAD_CAR_AD_FETCH_SUCCESS,
    payload: userData
});

export const uploadCarAd = (userId, data) => async dispatch => {
    try {
        console.log(userId, data);
        const carAdResult = await userService.uploadCarAd(userId, data);
        console.log(carAdResult);
        // dispatch(push('/login'));

    } catch (err) {
        console.log(err);
    }
};
