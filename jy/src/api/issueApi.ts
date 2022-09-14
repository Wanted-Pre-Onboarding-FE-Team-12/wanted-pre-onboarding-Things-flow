import { axiosInstance } from 'api';

/**
 * List organization issues assigned to the authenticated user
 *  https://api.github.com/orgs/ORG/issues
 *
 * Get an issue
 *  https://api.github.com/repos/OWNER/REPO/issues/ISSUE_NUMBER
 * */

/**
 * GET
 * /orgs/{org}/issues
 *
 * 1. state: open이고,
 * 2. sort: comments가 많은 순
 * 3. page: 페이지 정보
 * */
export const getRepositoryIssues = async (page: number) => {
	const response = await axiosInstance.get(
		`repos/angular/angular-cli/issues?state=open&sort=comments&page=${page}`
	);
	return response;
};

/**
 * GET
 * /repos/{owner}/{repo}/issues/{issue_number}
 * */
export const getRepositoryIssue = async () => {
	const response = await axiosInstance.get(
		`repos/{owner}/{repo}/issues/{issue_number}`
	);
	return response;
};
