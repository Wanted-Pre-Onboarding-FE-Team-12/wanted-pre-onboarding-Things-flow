import { Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from '@pages/Home';
import IssuePage from '@pages/IssueDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:owner/:repo" element={<IndexPage />} />
        <Route path="/:owner/:repo/issue/:number" element={<IssuePage />} />
        <Route path="*" element={<Navigate to="/angular/angular-cli" replace />} />
      </Routes>
    </div>
  );
}

export default App;
