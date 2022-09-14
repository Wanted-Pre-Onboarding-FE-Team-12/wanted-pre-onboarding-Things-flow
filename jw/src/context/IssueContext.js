import React, { createContext, useReducer, useContext } from 'react';
import {
  createAsyncDispatcher,
  createAsyncHandler,
  initialAsyncState,
} from '../utils/asyncActionUtils';
import * as api from '../apis/issueApi';

// IssueContext 에서 사용 할 기본 상태
const initialState = {
  repo: initialAsyncState,
  issues: initialAsyncState,
  issue: initialAsyncState,
};

const repoHandler = createAsyncHandler('GET_REPO', 'repo');
const issuesHandler = createAsyncHandler('GET_ISSUES', 'issues');
const issueHandler = createAsyncHandler('GET_ISSUE', 'issue');

// 위에서 만든 객체 / 유틸 함수들을 사용하여 리듀서 작성
function issuesReducer(state, action) {
  switch (action.type) {
    case 'GET_REPO':
    case 'GET_REPO_SUCCESS':
    case 'GET_REPO_ERROR':
      return repoHandler(state, action);
    case 'GET_ISSUES':
    case 'GET_ISSUES_SUCCESS':
    case 'GET_ISSUES_ERROR':
      return issuesHandler(state, action);
    case 'GET_ISSUE':
    case 'GET_ISSUE_SUCCESS':
    case 'GET_ISSUE_ERROR':
      return issueHandler(state, action);
    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const IssuesStateContext = createContext(null);
const IssuesDispatchContext = createContext(null);

// 위에서 선언한 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
export function IssuesProvider({ children }) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useIssuesState() {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error('Cannot find IssuesProvider');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find IssuesProvider');
  }
  return dispatch;
}

export const getIssues = createAsyncDispatcher('GET_ISSUES', api.getIssues);
export const getIssue = createAsyncDispatcher('GET_ISSUE', api.getIssue);
export const getRepo = createAsyncDispatcher('GET_REPO', api.getRepo);
