const API_URL = 'http://localhost:5000';

const api = {
    registerUser: () => `${API_URL}/users/register`,
    loginUser: () => `${API_URL}/users/login`,
    carAd: (userId) => `${API_URL}/users/${userId}/car-ad`,
};

export default api;
