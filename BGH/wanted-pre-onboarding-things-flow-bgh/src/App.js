import { Route, Routes } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import * as issuesApi from './api/issuesApi';
import Main from './pages/Main/index';
import Detail from './pages/Detail/Detail';

export const Issues = createContext(null);

const App = () => {
  const [issuesList, setissuesList] = useState();
  const openIssues = issuesList?.filter((el) => el.state === 'open');
  useEffect(() => {
    issuesApi
      .getIssuesAngular()
      .then((res) =>
        setissuesList(res.sort((a, b) => b.comments - a.comments))
      );
  }, []);

  return (
    <Issues.Provider value={openIssues}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Issues.Provider>
  );
};

export default App;
