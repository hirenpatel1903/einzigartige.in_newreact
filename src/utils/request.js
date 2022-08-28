import axios from "axios";

// const baseURL = 'https://einzigartige.in/api/';
const baseURL = 'http://127.0.0.1:8000/api/';

function request(url) {
    const headers = {
        Accept: 'application/json',
    };
    const requestUrl = baseURL + url;

    return axios({
        method: 'GET',
        url: requestUrl,
        headers,
    });
}

function postRequest(url, params) {
    const headers = {
        Accept: 'application/json',
    };
    const requestUrl = baseURL + url;

    return axios({
        method: 'POST',
        url: requestUrl,
        data: params,
        headers,
    });
}

export {
    request,
    postRequest
};