const API_URL = 'http://localhost:5000';

const api = {
    registerUser: () => `${API_URL}/users/register`,
    loginUser: () => `${API_URL}/users/login`,
    userCars: (userId) => `${API_URL}/users/${userId}/cars`,
    cars: (filters) => `${API_URL}/cars?filters=${filters}`,
};

export default api;
