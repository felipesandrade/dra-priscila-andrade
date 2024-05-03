import axios from 'axios';

const reviewsFetch = axios.create({
    baseURL: import.meta.env.VITE_GOOGLE_REVIEWS_URL,
    headers: {
        "Content-Type": "application/json",
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Access-Control-Allow-Methods': 'GET',
    },
});

export default reviewsFetch;