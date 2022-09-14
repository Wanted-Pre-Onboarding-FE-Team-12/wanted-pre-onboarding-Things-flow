import { instance } from './index';

export const getIssuesAngular = async () => {
  const response = await instance.get('/issues');
  return response.data;
};
