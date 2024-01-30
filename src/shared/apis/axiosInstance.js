import axios from 'axios';
import dayjs from 'dayjs';
import {jwtDecode} from 'jwt-decode';
import _ from 'lodash';
import { MESSAGES } from '../global/messages';

const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:8000';
const AUTH_REFRESH_URL = '/api/token/refresh';

let authToken = localStorage.getItem('access_token') || null;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${authToken}` },
}); 

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (axios.isCancel(error)) {
            return Promise.reject({ canceled: 'Previous Request Canceled' });
        } else if (error.response) {
            if (error.response.status === 0) {
                return Promise.reject({ error: MESSAGES['500'] });
            } else if (_.inRange(error.response.status, 500, 600)) {
                return Promise.reject({ error: MESSAGES['500'], status: error.response.status });
            } else if (error.response.status === 404) {
                return Promise.reject({ error: 'Not Found', status: error.response.status });
            } else if (error.response.data.message) {
                return Promise.reject({ error: error.response.data.message });
            } else if (error.response.status === 403 && error.response.data.detail) {
                return Promise.reject({ error: error.response.data.detail, status: error.response.status });
            }
            return Promise.reject(error);
        }
        // eslint-disable-next-line consistent-return
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.request.use(async (req) => {
    if (!authToken) {
        authToken = localStorage.getItem('access_token') || '';
        req.headers.Authorization = `Bearer ${authToken}`;
    }
    if (!authToken) {
        return req;
    }
    const user = jwtDecode(authToken || '');
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    const refreshToken = localStorage.getItem('refresh_token') || null;
    const userRefresh = jwtDecode(refreshToken || '');
    const isExpiredRefresh = dayjs.unix(userRefresh.exp).diff(dayjs()) < 1;
    if (isExpiredRefresh) {
        localStorage.clear();
        window.location.href = '/auth';
    }

    // TODO: uncomment when refresh token api is implemented

    // const response = await axios.post(`${BASE_URL}${AUTH_REFRESH_URL}`, {
    //     refresh: refreshToken,
    // });

    // localStorage.setItem('access_token', response.data.access);
    // localStorage.setItem('refresh_token', response.data.refresh);
    // req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
});

const WEBSOCKET_BASE_URL = `${process.env.REACT_APP_SECURE_WEBSOCKET_CONNECTION ? 'wss' : 'ws'}://${
    process.env.REACT_APP_WEBSOCKET_BASE_URL || 'localhost:8000'
}`;

const headers = {
    Accept: 'application/json',
};

const httpGet = (url, params, config) =>
    axiosInstance.get(url, {
        headers,
        params: params,
        ...config,
    });

const httpPost = (url, body, config) =>
    axiosInstance.post(url, body, {
        headers,
        ...config,
    });

const httpPut = (url, body, config) =>
    axiosInstance.put(url, body, {
        headers,
        ...config,
    });

const httpPatch = (url, body) =>
    axiosInstance.patch(url, body, {
        headers,
    });

const httpDelete = (url) =>
    axiosInstance.delete(url, {
        headers,
    });

export {
    BASE_URL,
    AUTH_REFRESH_URL,
    WEBSOCKET_BASE_URL,
    httpGet,
    httpPost,
    httpPatch,
    httpDelete,
    httpPut,
    axios,
    axiosInstance,
};
