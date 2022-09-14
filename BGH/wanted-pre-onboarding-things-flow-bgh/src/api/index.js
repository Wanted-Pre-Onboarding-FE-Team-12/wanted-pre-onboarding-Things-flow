import axios from 'axios';

const owner = 'angular';
const repo = 'angular-cli';
const BASE_URL = `https://api.github.com/repos/${owner}/${repo}`;

export const instance = axios.create({
  baseURL: BASE_URL,
});
