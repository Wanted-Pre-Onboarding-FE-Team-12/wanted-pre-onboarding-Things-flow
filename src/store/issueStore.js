import React, { createContext, useState } from 'react';
import * as IssueApi from '@api/issueApi';

const IssueContext = createContext({
  isLoading: false,
  issueList: [],
  issueData: {},
  issueCount: '',
  getIssueList: () => {},
  getIssueData: () => {},
  getIssueCount: () => {},
});

export const IssueContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [issueList, setIssueList] = useState([]);
  const [issueCount, setIssueCount] = useState(0);
  const [issueData, setIssueData] = useState({});

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

  const getIssueData = async issueNumeber => {
    try {
      const response = await IssueApi.fetchSingleIssue(issueNumeber);
      const { number, title, user, created_at, comments, body } = await response.data;
      setIssueData({ number, title, user, created_at, comments, body });
    } catch (error) {
      alert(error);
    }
  };
  const contextValue = {
    isLoading,
    issueCount,
    issueList,
    issueData,
    getIssueList,
    getIssueData,
    getIssueCount,
  };

  return <IssueContext.Provider value={contextValue}>{children}</IssueContext.Provider>;
};

export default IssueContext;
