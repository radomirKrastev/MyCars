import carService from '../services/carService';

import {
    SEARCH_CARS_FETCH_SUCCESS,
    UPDATE_CAR_FETCH_SUCCESS,
    DELETE_CAR_SUCCESS,
} from './actionTypes';

import { notifySuccess } from '../utils/notifications';

const fetchSearchCarsSuccess = carsData => ({
    type: SEARCH_CARS_FETCH_SUCCESS,
    payload: carsData
});

const fetchUpdateCarSuccess = updatedCarData => ({
    type: UPDATE_CAR_FETCH_SUCCESS,
    payload: updatedCarData
});

const deleteCarSuccess = carId => ({
    type: DELETE_CAR_SUCCESS,
    payload: carId
});

export const uploadCarAd = (userId, data) => async dispatch => {
    try {
        console.log(userId, data);
        await carService.uploadCarAd(userId, data);
        notifySuccess('Car ad uploaded successfuly');
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
        notifySuccess('offer send successfuly');
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
        notifySuccess('Car ad updated successfuly');
    } catch (err) {
        console.log(err);
    }
};

export const deleteCarOffer = (userId, carId) => async dispatch => {
    try {
        console.log({ userId, carId })
        await carService.deleteCarOffer(userId, carId);
        dispatch(deleteCarSuccess(carId));
        notifySuccess('Car ad deleted successfuly');
    } catch (err) {
        console.log(err);
    }
};
