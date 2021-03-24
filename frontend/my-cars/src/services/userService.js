import api from './api';

import store from '../config/store';

const authService = {
    uploadCarAd: function (userId, data) {
        const state = store.getState();
        const token = state.auth.accessToken;
        return fetch(api.carAd(userId), {
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
};

export default authService;
