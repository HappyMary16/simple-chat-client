import axios from 'axios';

export default async function http({ method, url, data }) {

    const config = {
        method: method.toLowerCase(),
        url: 'http://localhost:8080/' + url
    };

    if (data) config['data'] = data;

    config['headers'] = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    };

    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            return error && error.response;
        }
    );

    return axios(config);
}