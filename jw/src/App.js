import { IssuesProvider } from './context/IssueContext';
import IssueList from './pages/IssueList';
import IssueDetail from './pages/IssueDetail';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <IssuesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/:owner/:repo/issue/:number" element={<IssueDetail />} />
          <Route path="/:owner/:repo" element={<IssueList />} />
          <Route path="*" element={<Navigate to="/angular/angular-cli" replace />} />
        </Routes>
      </BrowserRouter>
    </IssuesProvider>
  );
}

export default App;
