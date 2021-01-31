import api from "./api";
// import axios from 'axios';

const authService = {
    login: function (data) {
        return fetch(api.loginUser, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(async res => {
                if (!res.ok) {
                    throw await res.json();
                }

                return res.json();
            })
    },
    register: function (data) {
        return fetch(api.registerUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
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
