import axios from 'axios';
import { AUTH } from './auth';

const GITHUB_BASE_URL = process.env.REACT_APP_GITHUB_SERVER_URL;

export const axiosInstance = axios.create({
	baseURL: 'https://api.github.com/',
	headers: {
		Accept: 'application/vnd.github.v3+json',
		Authorization: `token ${AUTH}`,
	},
});
