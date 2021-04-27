import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://90b07e1252d5.ngrok.io/recipes/'
})