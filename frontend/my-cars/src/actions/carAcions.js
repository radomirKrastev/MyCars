import carService from '../services/carService';
import { push } from 'connected-react-router';

import {
    SEARCH_CARS_FETCH_SUCCESS
} from './actionTypes';

// const fetchUserUploadCarAdSuccess = (userData) => ({
//     type: UPLOAD_CAR_AD_FETCH_SUCCESS,
//     payload: userData
// });

const fetchSearchCarsSuccess = carsData => ({
    type: SEARCH_CARS_FETCH_SUCCESS,
    payload: carsData
});

export const uploadCarAd = (userId, data) => async dispatch => {
    try {
        console.log(userId, data);
        await carService.uploadCarAd(userId, data);

    } catch (err) {
        console.log(err);
    }
};

export const searchCars = filters => async dispatch => {
    try {
        // const filters = JSON.stringify(filters);
        console.log(filters);
        const cars = await carService.searchCars(JSON.stringify(filters));
        dispatch(fetchSearchCarsSuccess(cars));
    } catch (err) {
        console.log(err);
    }
};
