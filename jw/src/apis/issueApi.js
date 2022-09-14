import { customApi } from './customApi';

export async function getRepo(owner, repo) {
  const response = await customApi.get(`/repos/${owner}/${repo}`);
  return response.data;
}
export async function getIssues(owner, repo, page, sort = 'comments') {
  const response = await customApi.get(`/repos/${owner}/${repo}/issues?page=${page}&sort=${sort}`);
  return response.data;
}

export async function getIssue(owner, repo, issue_number) {
  const response = await customApi.get(`/repos/${owner}/${repo}/issues/${issue_number}`);
  return response.data;
}
