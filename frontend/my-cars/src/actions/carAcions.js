import carService from '../services/carService';
import { push } from 'connected-react-router';

import {
    SEARCH_CARS_FETCH_SUCCESS,
    UPDATE_CAR_FETCH_SUCCESS,
} from './actionTypes';

const fetchSearchCarsSuccess = carsData => ({
    type: SEARCH_CARS_FETCH_SUCCESS,
    payload: carsData
});

const fetchUpdateCarSuccess = updatedCarData => ({
    type: UPDATE_CAR_FETCH_SUCCESS,
    payload: updatedCarData
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
        const cars = await carService.searchCars(JSON.stringify(filters));
        dispatch(fetchSearchCarsSuccess(cars));
    } catch (err) {
        console.log(err);
    }
};

export const createBuyCarOffer = (userId, carId, offer) => async dispatch => {
    try {
        await carService.createBuyCarOffer(userId, carId, offer);
    } catch (err) {
        console.log(err);
    }
};

export const fetchMyCars = userId => async dispatch => {
    try {
        const cars = await carService.fetchMyCars(userId);
        dispatch(fetchSearchCarsSuccess(cars));
    } catch (err) {
        console.log(err);
    }
};

export const updateCarOffer = (userId, carId, updateData) => async dispatch => {
    try {
        console.log({ userId, carId, updateData })
        const result = await carService.updateCarOffer(userId, carId, updateData);
        dispatch(fetchUpdateCarSuccess(result));
    } catch (err) {
        console.log(err);
    }
};
