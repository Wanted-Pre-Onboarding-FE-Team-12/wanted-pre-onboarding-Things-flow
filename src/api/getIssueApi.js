import { instance } from './index.js';

import optionData from '@constants/variables';

export const getIssueList = async page => {
  const data = await instance.get(`repos/${optionData.OWNER}/${optionData.REPO}/issues`, {
    params: { ...optionData.OPTION, page },
  });
  return data;
};

export const getSingleIssue = async issueNumeber => {
  const data = await instance.get(
    `repos/${optionData.OWNER}/${optionData.REPO}/issues/${issueNumeber}`,
  );
  return data;
};
