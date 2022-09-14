import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useCallback, useReducer } from 'react';

import Issue from './pages/Issue';
import IssueDetail from './pages/IssueDetail';
import { Context, initialState, reducer } from './store/common';
import Loading from './components/common/Loading';
import Error from './components/common/Error';
import Header from './components/common/Header';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = useCallback(() => {
    dispatch({
      type: 'LOADING',
    });
  }, []);
  const setError = useCallback((errorMessage) => {
    dispatch({
      type: 'ERROR',
      errorMessage,
    });
  }, []);
  const setSuccess = useCallback(() => {
    dispatch({
      type: 'SUCCESS',
    });
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Context.Provider value={{ state, setLoading, setError, setSuccess }}>
          <Loading />
          {state.error && <Error />}
          {!state.error && (
            <Routes>
              <Route path="*" element={<Issue />} />
              <Route path="/issue/:issueNumber" element={<IssueDetail />} />
            </Routes>
          )}
        </Context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
