import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await api.post('/refresh'); // Request backend to refresh token
                return api(originalRequest); // Retry original request
            } catch (err) {
                console.error('Refresh token expired');
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);

export default api;
