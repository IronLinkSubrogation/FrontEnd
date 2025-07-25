import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';

import Dashboard from './routes/dashboard/index.jsx';
import CaseRoute from './routes/case/[id]/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/case/:id" element={<CaseRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
