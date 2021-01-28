import api from "./api";
// import axios from 'axios';

const authService = {
    login: function (data) {
        return fetch(api.loginUser, {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => (res.status === 200 ? res : Promise.reject(res)))
            .then(res => res.json())
    },
    register: function (data) {
        return fetch(api.registerUser, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json());
    },
};

export default authService;
