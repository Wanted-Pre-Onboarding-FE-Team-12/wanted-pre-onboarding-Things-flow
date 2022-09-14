import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { IssueContextProvider } from './store/issueStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IssueContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IssueContextProvider>,
);
