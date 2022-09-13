import IssuePage from '@pages/issue';
import { Routes, Route, Navigate } from 'react-router-dom';
import IndexPage from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<IndexPage />} />
        <Route path="/issue/:issue_number" element={<IssuePage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export default App;
