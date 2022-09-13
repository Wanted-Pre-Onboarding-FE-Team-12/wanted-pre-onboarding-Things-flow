import React, { createContext, useState } from 'react';
import * as IssueApi from '@api/issueApi';

const IssueContext = createContext({
  isLoading: false,
  issueList: [],
  issueCount: '',
  getIssueList: () => {},
  getIssueCount: () => {},
});

export const IssueContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [issueList, setIssueList] = useState([]);
  const [issueCount, setIssueCount] = useState(0);

  const getIssueCount = async () => {
    try {
      const response = await IssueApi.fetchRepo();
      setIssueCount(response.data.open_issues_count);
    } catch (error) {
      alert(error.response);
    }
  };

  const getIssueList = async page => {
    try {
      setIsLoading(true);
      const response = await IssueApi.fetchIssueList(page);
      setIssueList(prev => [...prev, ...response.data]);
    } catch (error) {
      alert(error.response);
    } finally {
      setIsLoading(false);
    }
  };
  const contextValue = { isLoading, issueCount, issueList, getIssueList, getIssueCount };

  return <IssueContext.Provider value={contextValue}>{children}</IssueContext.Provider>;
};

export default IssueContext;
