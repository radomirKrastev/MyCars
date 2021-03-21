import api from './api';
// import axios from 'axios';

const authService = {
    uploadCarAd: function (userId, data) {
        console.log(data)
        return fetch(api.carAd(userId), {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json'
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
