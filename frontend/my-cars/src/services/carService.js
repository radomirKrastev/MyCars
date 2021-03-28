import api from './api';

import store from '../config/store';

const carService = {
    uploadCarAd: function (userId, data) {
        const state = store.getState();
        const token = state.auth.accessToken;
        return fetch(api.userCars(userId), {
            method: 'POST',
            headers: {
                ...(token && { 'x-access-token': token })
            },
            body: data
        })
            .then(async res => {
                if (!res.ok) {
                    throw await res.json();
                }

                return res.json();
            })
    },

    searchCars: function (filters) {
        const state = store.getState();
        const token = state.auth.accessToken;
        return fetch(api.cars(filters), {
            method: 'GET',
            headers: {
                ...(token && { 'x-access-token': token })
            },
        })
            .then(async res => {
                if (!res.ok) {
                    throw await res.json();
                }

                return res.json();
            })
    },
};

export default carService;
