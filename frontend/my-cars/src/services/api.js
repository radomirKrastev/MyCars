const API_URL = 'http://localhost:5000';

const api = {
    registerUser: () => `${API_URL}/users/register`,
    loginUser: () => `${API_URL}/users/login`,
    cars: (filters) => `${API_URL}/cars?filters=${filters}`,
    userCar: (userId, carId) => `${API_URL}/users/${userId}/cars/${carId}`,
    userCars: userId => `${API_URL}/users/${userId}/cars`,
};

export default api;
