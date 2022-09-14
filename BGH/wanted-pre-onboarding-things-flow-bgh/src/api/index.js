import axios from 'axios';

const owner = 'angular';
const repo = 'angular-cli';
const BASE_URL = `https://api.github.com/repos/${owner}/${repo}`;
const API_KEY = process.env.REACT_APP_API_KEY;

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearor ${API_KEY}`,
  },
});
