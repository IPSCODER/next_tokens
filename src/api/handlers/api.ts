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
        if (!error.response) {
            // This means the request failed before receiving a response (e.g., network issues, server is down)
            console.error('Network error or server is down');
            return Promise.reject({
                message: "Server is not reachable. Please check your connection or try again later.",
            });
        }

        // Handle token refresh logic only if status is 403 and no retry has been done
        if (error.response.status === 403 && !originalRequest?._retry) {
            originalRequest._retry = true;
            try {
                await api.post('/refresh'); // Request backend to refresh token
                return api(originalRequest); // Retry the original request
            } catch (err) {
                console.error('Refresh token expired');
                return Promise.reject(err);
            }
        }

        // For other errors, reject the promise and propagate the error
        return Promise.reject(error);
    }
);

export default api;
