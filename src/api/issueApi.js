import { instance } from './index.js';

import optionData from '@constants/variables';

export const fetchRepo = () => {
  return instance.get(`repos/${optionData.OWNER}/${optionData.REPO}`);
};

export const fetchIssueList = ({ page }) => {
  return instance.get(`repos/${optionData.OWNER}/${optionData.REPO}/issues`, {
    params: { ...optionData.OPTION, page },
  });
};

export const fetchSingleIssue = issueNumeber => {
  return instance.get(`repos/${optionData.OWNER}/${optionData.REPO}/issues/${issueNumeber}`);
};
