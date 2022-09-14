import { Octokit } from '@octokit/rest';

/** token */
export const octokit = new Octokit({
	auth: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
});

export const AUTH = 'ghp_';
