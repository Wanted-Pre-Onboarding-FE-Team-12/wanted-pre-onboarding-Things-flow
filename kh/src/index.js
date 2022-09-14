import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { IssuesProvider } from './context/IssueContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IssuesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IssuesProvider>,
);
